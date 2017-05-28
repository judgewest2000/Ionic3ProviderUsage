import { Student } from './../../models/student';
import { StudentProvider } from './../../providers/student/student';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private studentProvider: StudentProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentListPage');
  }

  ionViewWillEnter () {
    this.getList();
  }

  loaded: boolean;

  all: Student[];

  gotoItem(item: Student) {
    this.navCtrl.push('StudentPage', { id: item.id });
  }

  async getList() {
    this.all = await this.studentProvider.getAll();
    this.loaded = true;
  }

  add() {
    this.navCtrl.push('StudentPage', { id: '' });
  }

}

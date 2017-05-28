import { Student } from './../../models/student';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StudentProvider } from "../../providers/student/student";

/**
 * Generated class for the StudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private studentProvider: StudentProvider) {
  }

  loaded = false;

  item: Student;

  ionViewDidLoad() {
    this.getItem();
  }

  async getItem() {
    let id = this.navParams.get('id') as string;
    
    this.item = await this.studentProvider.get(id);
    this.loaded = true;
  }

  cancel() {
    this.navCtrl.pop();
  }

  async save() {
    await this.studentProvider.save(this.item);
    this.navCtrl.pop();
  }

  remove() {

    let alert = this.alertCtrl.create({
      title: 'Confirm Removal',
      message: 'Comfirm removal of this student?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.studentProvider.remove(this.item.id)
              .then(() => {
                this.navCtrl.pop();
              });
          }
        }
      ]
    });
    alert.present();


  }




}

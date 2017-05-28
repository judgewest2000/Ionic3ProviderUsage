import { Component } from '@angular/core';
import { NavController, NavOptions } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoStudents() {
    this.navCtrl.push('StudentListPage');
  }

  gotoReminders(){
    this.navCtrl.push('ReminderListPage');
  }

}

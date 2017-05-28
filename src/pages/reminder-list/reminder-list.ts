import { Reminder } from './../../models/reminder';
import { ReminderProvider } from './../../providers/reminder/reminder';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReminderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reminder-list',
  templateUrl: 'reminder-list.html',
})
export class ReminderListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private reminderProvider: ReminderProvider) {
  }

  ionViewWillEnter() {
    this.getList();
  }

  loaded: boolean;

  all: Reminder[];

  gotoItem(item: Reminder) {
    this.navCtrl.push('ReminderPage', { id: item.id });
  }

  async getList() {
    this.all = await this.reminderProvider.getAll();
    this.loaded = true;
  }

  add() {
    this.navCtrl.push('ReminderPage', { id: '' });
  }


}

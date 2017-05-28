import { ReminderProvider } from './../../providers/reminder/reminder';
import { Reminder } from './../../models/reminder';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ReminderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private reminderProvider: ReminderProvider) {
  }


  loaded = false;

  item: Reminder;

  ionViewDidLoad() {
    this.getItem();
  }

  async getItem() {
    let id = this.navParams.get('id') as string;

    this.item = await this.reminderProvider.get(id);
    this.loaded = true;
  }

  cancel() {
    this.navCtrl.pop();
  }

  async save() {
    await this.reminderProvider.save(this.item);
    this.navCtrl.pop();
  }

  remove() {

    let alert = this.alertCtrl.create({
      title: 'Confirm Removal',
      message: 'Comfirm removal of this Reminder?',
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
            this.reminderProvider.remove(this.item.id)
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

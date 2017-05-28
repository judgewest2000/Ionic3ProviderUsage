import { DatabaseAccessProvider } from './../database-access/database-access';
import { Injectable } from '@angular/core';
import { BaseEntityProvider } from "../base-entity/base-entity";
import { Reminder } from "../../models/reminder";

/*
  Generated class for the ReminderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ReminderProvider extends BaseEntityProvider<Reminder>{

  constructor(private databaseAccessProvider: DatabaseAccessProvider) {

    super({
      databaseAccessProvider: databaseAccessProvider,
      blankDefaults: item => {
        item.title = '';
        item.description = '';
      },
      databaseAccessKey: 'reminders'
    });

  }

}

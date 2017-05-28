import { Student } from './../../models/student';
import { DatabaseAccessProvider } from './../database-access/database-access';
import { Injectable, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseEntityProvider } from "../base-entity/base-entity";

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StudentProvider extends BaseEntityProvider<Student>{

  constructor(private databaseAccessProvider: DatabaseAccessProvider) {

    super({
      databaseAccessProvider: databaseAccessProvider,
      blankDefaults: item => {
        item.name = '';
      },
      databaseAccessKey: 'students'
    });

  }

 

}


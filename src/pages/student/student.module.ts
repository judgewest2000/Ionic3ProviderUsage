import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentPage } from './student';

@NgModule({
  declarations: [
    StudentPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentPage),
  ],
  exports: [
    StudentPage
  ]
})
export class StudentPageModule {}

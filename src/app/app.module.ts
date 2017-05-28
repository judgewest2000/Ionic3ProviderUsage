import { IOSCustomTransition } from './../config/ios-custom-transition';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseAccessProvider } from '../providers/database-access/database-access';
import { StudentProvider } from '../providers/student/student';

import { IonicStorageModule } from '@ionic/storage';
import { ReminderProvider } from '../providers/reminder/reminder';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseAccessProvider,
    StudentProvider,
    ReminderProvider
  ]
})
export class AppModule {

  constructor(config: Config) {

    //config.setTransition('ios-transition', IOSCustomTransition);


  }

}


import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { loginPage } from '../pages/login/login';
import { newTaskPage } from '../pages/newTask/newTask';
import { newListPage } from '../pages/newList/newList';
import { logoutPage } from '../pages/logout/logout';
import { tasksPage } from '../pages/tasks/tasks';
import { tabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    loginPage,
    newTaskPage,
    newListPage,
    logoutPage,
    tasksPage,
    tabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    loginPage,
    newTaskPage,
    newListPage,
    logoutPage,
    tasksPage,
    tabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { newTaskPage } from '../newTask/newTask';
import { newListPage } from '../newList/newList';
import { logoutPage } from '../logout/logout';
import { tasksPage } from '../tasks/tasks';
import { loginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class tabsPage {

  tab1Root = tasksPage;
  tab2Root = newTaskPage;
  tab3Root = logoutPage;
  tab4Root = newListPage;

  constructor( public navCtrl: NavController ) {
    if( localStorage.getItem("loggedUser") ) {
      this.navCtrl.push(loginPage);
    }
  }
}

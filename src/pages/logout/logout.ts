import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'logout.html'
})
export class logoutPage {

  constructor(public navCtrl: NavController) { 
    sessionStorage.removeItem("loggedUser");
    window.location.reload();
  }
}


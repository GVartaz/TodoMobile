import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { tabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class loginPage {
  
  username: string;
  password: string;

  username1 : string;
  password1: string;
  password2: string;
  
  errorL : string = '';
  errorR : string = '';

  constructor(public navCtrl: NavController, private http: Http ) {
    
  }

  login(){
    this.errorL = '';

    return new Promise(resolve => {
 
      var requete = {
        login : this.username,
        pwd : this.password
      };

        if(requete.login == "" || requete.pwd == ""){
            this.errorL = "Vous devez remplir les champs";
        }
        if(requete.login != "" && requete.pwd != "" ){
          this.http.post('/connexion', requete)
          .map(res => res.json())
          .subscribe(res => {
                if(res.data == false){
                    this.errorL = "Identifiant(s) invalide(s)";
                } else {
                  sessionStorage.setItem("loggedUser",this.username);
                  this.navCtrl.push(tabsPage);
                }
                resolve(res.tasks);
            });
        }
      });
  }

  register() {
    this.errorR = '';

    if( this.password1 == this.password2 ){

      return new Promise(resolve => {
        var requete = {
          login : this.username1,
          pwd : this.password2
        };

        if(requete.login == "" || requete.pwd == ""){
          this.errorR = "Vous devez remplir les champs";
        }
        if(requete.login != "" && requete.pwd != "" ){
          this.http.post('/addUser', requete)
          .map(res => res.json())
          .subscribe(res => {
                if(res.data == false){
                    this.errorR = "Identifiant déjà utilisé";
                } else {
                  sessionStorage.setItem("loggedUser",this.username1);
                  this.navCtrl.push(tabsPage);
                }
                resolve(res.tasks);
            });
        }
      });
    }else{
      this.errorR = "Les 2 mots de passe ne correspondent pas"
      this.password1 = '';
      this.password2 = '';
    }
  }
}

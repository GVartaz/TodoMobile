import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'newList.html'
})

export class newListPage {

  list : String;
  errorR : string = '';

  constructor( public navCtrl: NavController, private http: Http ) {
        
  }

  addList() {
    return new Promise(resolve => {
      this.errorR = '';
      var requete = {
        name : this.list
      };
    if(requete.name == undefined){
      this.errorR = "Vous devez donner un nom à votre liste";
    } else {
        this.errorR = '';
        this.http.post('/addList', requete)
          .subscribe(res => {
            window.location.reload();
            resolve(res);
          });
    }
    });
  }
}

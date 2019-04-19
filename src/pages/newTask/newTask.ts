import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'newTask.html'
})

export class newTaskPage {

  list : String;
  task : String;
  listSet: any;
  errorR : string = '';

  constructor( public navCtrl: NavController, private http: Http ) {
    this.http.get('/getTaskSet')
        .map(res => res.json())
        .subscribe(res => {
          this.listSet = res.listeSet;
        });
        
  }

  addTask() {
    return new Promise(resolve => {
      this.errorR = '';
      var requete = {
        text : this.task,
        select : this.list
      };

    if(requete.select == undefined){
      this.errorR = "Veuillez associer la tache à une de vos listes";
    } else {
      if(requete.text == undefined){
        this.errorR = "Veuillez donner un nom à votre tache";
      } else {
        this.errorR = '';
        this.http.post('/addTask', requete)
          .subscribe(res => {
            window.location.reload();
            resolve(res);
          });
        }
    }
    });
  }
}

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'tasks.html'
})

export class tasksPage {
  taskSet: any;
  listSet: any;

  constructor( private http: Http ) {
  
    this.getAllTasksFromAuthor().then((data)=>
    {
      this.taskSet = data[0];
      this.listSet = data[1];
    });
    
  }

  getAllTasksFromAuthor() {
 
    return new Promise(resolve => {

      this.http.get('/getTaskSet')
        .map(res => res.json())
        .subscribe(res => {
          resolve([res.taskSet,res.listeSet]);
        });
    });  
  }

  deleteTask( _id ){
    return new Promise(resolve => {
      this.http.delete('/deleteTask/'+_id)
        .subscribe(res => {
          this.getAllTasksFromAuthor().then((data)=>
          {
            this.taskSet = data[0];
            this.listSet = data[1];
          });
          resolve(res);
      });
    });
  }

  deleteList( _id ){
    return new Promise(resolve => {
      this.http.delete('/deleteList/'+_id)
        .subscribe(res => {
          this.getAllTasksFromAuthor().then((data)=>
          {
            this.taskSet = data[0];
            this.listSet = data[1];
          });
          resolve(res);
      });
    });
  }

  updateCB( _id ){
    return new Promise(resolve => {

      var requete = {
        id : _id
      };
    
      this.http.put('/updateCB/'+_id, requete )
      .subscribe(res => {
        this.getAllTasksFromAuthor().then((data)=>
        {
          this.taskSet = data[0];
          this.listSet = data[1];
        });
        resolve(res);
    });
    });
  }

}

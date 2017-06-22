import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Sports {
 
  constructor(public http: Http) {
 
  }
 
  getSports(options){
 
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('http://localhost:8080/api/sports', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
 
  }
 
    createSport(data){
 
    return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('http://localhost:8080/api/create/session', JSON.stringify(data), {headers: headers})
        .subscribe((data) => {
          resolve(data);
        });
 
    });
 
  }
 
}
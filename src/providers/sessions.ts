import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Sessions {
 
  constructor(public http: Http) {
 
  }
 
  getSessions(options){
 
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('http://localhost:8080/api/sessions', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
 
  createSession(data){
 
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
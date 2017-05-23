import {Injectable} from '@angular/core';
import {Http, State} from '@angular/http';
import {Storage, LocalStorage, Events} from 'ionic-angular';


//export class ConferenceData {
  //static get parameters(){
  //  return [[Http], [UserData]];
  //}
  //
  //constructor(http, user) {
  //  // inject the Http provider and set to this instance
  //  this.http = http;
  //  this.user = user;
  //}
@Injectable()
export class UserData {
  static get parameters(){
    return [[Http],[Events]];
  }

  constructor(http, events) {
    this._favorites = [];
    this.storage = new Storage(LocalStorage);
    this.events = events;
    this.HAS_LOGGED_IN = 'hasLoggedIn';
    this.USR_NAME='username';
   // this.auth=auth;
    this.http=http;

  }

  hasFavorite(sessionName) {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName) {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName) {
    let index = this._favorites.indexOf(sessionName)
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(username, password) {

    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set(this.USR_NAME, 'name');
    this.events.publish('user:login');
    return this.http.get("http://localhost:3000/login/authuser/" + username + "/" + password);
  }

  signup(username, password) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.events.publish('user:signup');
    return this.http.get("http://localhost:3000/login/authuser/" + username + "/" + password);
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.events.publish('user:logout');
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  }
}

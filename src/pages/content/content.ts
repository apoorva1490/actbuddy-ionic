import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, Config, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ConferenceData } from '../../providers/conference-data';
import { UserDetailPage } from '../user-detail/user-detail';
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  speakers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
        this.speakers = this.navParams.get('profiles');
    }
 
    goToSpeakerDetail(user: any) {
    this.navCtrl.push(UserDetailPage, {
      user: user,
      name: user.name
    });
  }


}

import { Component } from '@angular/core';
import { IonicPage, ActionSheet, ActionSheetController, Config, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { ConferenceData } from '../../providers/conference-data';
import { UserDetailPage } from '../speaker-detail/speaker-detail';
import { PopoverPage } from '../request/user-request';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {


actionSheet: ActionSheet;
messages = [];
 

  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public confData : ConferenceData, public config: Config) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
    this.confData.getSpeakers().subscribe(speakers => {
      this.messages = speakers;
    });
  }

  // goToMessageDetail(message) {
  //   this.navCtrl.push(SessionDetailPage, message);
  // }

  // goToSpeakerDetail(speakerName: any) {
  //   this.navCtrl.push(UserDetailPage, speakerName);
  // }

  // goToSpeakerTwitter(speaker) {
  //   new InAppBrowser(`https://twitter.com/${speaker.twitter}`, '_blank');
  // }

  // openSpeakerShare(speaker) {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Share ' + speaker.name,
  //     buttons: [
  //       {
  //         text: 'Copy Link',
  //         handler: ($event) => {
  //           console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
  //           if (window['cordova'] && window['cordova'].plugins.clipboard) {
  //             window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
  //           }
  //         }
  //       },
  //       {
  //         text: 'Share via ...'
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  // }

  // openContact(speaker) {
  //   let mode = this.config.get('mode');

  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Contact ' + speaker.name,
  //     buttons: [
  //       {
  //         text: `Email ( ${speaker.email} )`,
  //         icon: mode !== 'ios' ? 'mail' : null,
  //         handler: () => {
  //           window.open('mailto:' + speaker.email);
  //         }
  //       },
  //       {
  //         text: `Call ( ${speaker.phone} )`,
  //         icon: mode !== 'ios' ? 'call' : null,
  //         handler: () => {
  //           window.open('tel:' + speaker.phone);
  //         }
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  // }
}

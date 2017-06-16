import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Item } from '../../models/item';

import { Items } from '../../providers/providers';
import { UserData } from '../../providers/user-data';
import { ConferenceData } from '../../providers/conference-data';

/**
 * Generated class for the CategoryDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-detail',
  templateUrl: 'category-detail.html',
})
export class CategoryDetailPage {

  category : any;
  sports : any = [];

  constructor( public navCtrl: NavController,
     public navParams: NavParams, 
     public items: Items,
    public confData: ConferenceData) {

      this.category=this.navParams.data;
    
  }

  ionViewDidLoad() {
    // this.items.getFilteredItems(this.category).subscribe(sports => {
    //   this.sports = sports;
    // });
    console.log('ionViewDidLoad CategoryDetailPage');
    this.updateSchedule();
  }

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    // this.sports = [];
    this.sports = this.items.getFilteredItems(this.category);
    console.log('Sport List', this.sports);
  }

}




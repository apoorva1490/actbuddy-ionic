import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { CategoryDetailPage } from '../category-detail/category-detail';

import { Item } from '../../models/item';

import { Items } from '../../providers/providers';
import { UserData } from '../../providers/user-data';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentItems: any = [];
  speakers: any = [];
  categories: any = [];
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public items: Items,
    public confData: ConferenceData,
    public user: UserData,) { 

   
    this.confData.getTracks().subscribe((categories: string[]) => {

      categories.forEach(trackName => {
        this.categories.push({
          name: trackName,
        //  isChecked: (excludedTrackNames.indexOf(trackName) === -1)
        });
      });

    });
     }


  ionViewDidLoad() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }
 
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

   goToCategoryDetail(speaker) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(CategoryDetailPage, speaker);
  }

}

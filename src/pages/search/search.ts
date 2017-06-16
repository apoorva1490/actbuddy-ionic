// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';

// import { ItemDetailPage } from '../item-detail/item-detail';
// import { CategoryDetailPage } from '../category-detail/category-detail';

// import { Item } from '../../models/item';

// import { Items } from '../../providers/providers';
// import { UserData } from '../../providers/user-data';
// import { ConferenceData } from '../../providers/conference-data';

// @Component({
//   selector: 'page-search',
//   templateUrl: 'search.html'
// })
// export class SearchPage {
  
//   currentItems: any = [];
//   speakers: any = [];
//   categories: any = [];
//   constructor(
//     public navCtrl: NavController,
//      public navParams: NavParams, 
//      public items: Items,
//     public confData: ConferenceData,
//     public user: UserData,) { 

   
//     this.confData.getTracks().subscribe((categories: string[]) => {

//       categories.forEach(trackName => {
//         this.categories.push({
//           name: trackName,
//         //  isChecked: (excludedTrackNames.indexOf(trackName) === -1)
//         });
//       });

//     });
//      }


//   ionViewDidLoad() {
//     this.confData.getSpeakers().subscribe((speakers: any[]) => {
//       this.speakers = speakers;
//     });
//   }
 
//   /**
//    * Perform a service for the proper items.
//    */
//   getItems(ev) {
//     let val = ev.target.value;
//     if (!val || !val.trim()) {
//       this.currentItems = [];
//       return;
//     }
//     this.currentItems = this.items.query({
//       name: val
//     });
//   }

//   /**
//    * Navigate to the detail page for this item.
//    */
//   openItem(item: Item) {
//     this.navCtrl.push(ItemDetailPage, {
//       item: item
//     });
//   }

//    goToCategoryDetail(speaker) {
//     // go to the session detail page
//     // and pass in the session data
//     this.navCtrl.push(CategoryDetailPage, speaker);
//   }

// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Settings } from '../../providers/settings';
import { ContentPage } from '../content/content';

import { TranslateService } from '@ngx-translate/core';
import { UserData } from '../../providers/user-data';
import { ConferenceData } from '../../providers/conference-data';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@Component({ 
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  // Our local settings object

  gender: any;
  ageRange: any = {lower: 10, upper: 60};
  location: number = 20;
  level: any;
  sports: any = [];


  options: any;
  speakers: any = [];
  settingsReady = false;
  selectSportsOptions: any;
  iconWoman: string = "true"
  iconMan: string = "true"

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SEARCH_TITLE';
  pageTitle: string;

  subSettings: any = SearchPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public confData: ConferenceData,
    public navParams: NavParams,
    public translate: TranslateService,
    public loadingCtrl: LoadingController) {


      this.selectSportsOptions = {
      title: 'Interest',
      subTitle: 'Select sports you want to play',
      mode: 'md'
    };

    //  this.gender="a";
    //  this.location=50;
    //  this.level="1";
    
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3],
      option4: [this.options.option4],
      option5: [this.options.option5]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  findBuddies() {
    let loading = this.loadingCtrl.create({
      content: "Finding Buddies..."
    });

    loading.present();

    let options = {
      gender: this.gender,
      location: this.location,
      level: this.level,
      ageRange: this.ageRange,
      sports: this.sports

    };

    loading.dismiss();

    this.navCtrl.push(ContentPage, {
        profiles: this.speakers,
        details: options
    });

  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
    this.speakers = speakers;
    });
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

 onChange(ev: any) {
    console.log('Changed', ev);
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
}

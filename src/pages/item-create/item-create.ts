import { Component, ViewChild, } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController, AlertController } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
import { Items, Sports } from '../../providers/providers';
import { Item } from '../../models/item';

@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;
  sportItems: any;
  item: any;
  sports: any;
  levels: any[];
  form: FormGroup;
  sport: any;
  level: any;
  selectedID: any;

  constructor(public navCtrl: NavController, public sportService: Sports, public alertCtrl: AlertController, public items: Items, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      level: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });


    let options = {

    };

    this.sportService.getSports(options).then((data) => {

      if (typeof (data[0]) === "undefined") {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Sorry, no sports could be found for your search criteria.',
          buttons: ['Ok']
        });

        alert.present();
      } else {
        // this.nav.push(AvailableRoomsPage, {
        //     rooms: data,
        //     details: options
        // });
        this.sportItems = data;
      }

    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {

  }

  setLevelValues(sport) {
    console.log(sport);
    console.log(sport.level);
    this.sportItems.forEach(element => {
      console.log(element);
    });

    
    this.levels = sport.level;
    console.log(this.levels);
  }

  updateLevel(level) {
    console.log(level.id);
    this.selectedID = level.id;
    this.form.valueChanges.subscribe((v) => {
      this.selectedID = this.level.id;
    });
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}

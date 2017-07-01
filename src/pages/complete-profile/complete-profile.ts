import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewController } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';
/**
 * Generated class for the CompleteProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-complete-profile',
  templateUrl: 'complete-profile.html',
})
export class CompleteProfilePage {
@ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

   account: { firstname?: string, 
     lastname?: string, 
     email?: string, 
     password?: string,
    dob?: string } = {};
 
  submitted: boolean = false;

  isSelectedButton: boolean = true;
  // Our translated text strings
  private signupErrorString: string;


 item: any;
 currentItems: Item[] = [];

  form: FormGroup;
  constructor(public navCtrl: NavController,public items: Items, public viewCtrl: ViewController, 
   public modalCtrl: ModalController, public navParams: NavParams, formBuilder: FormBuilder, public camera: Camera) {
  console.log(this.navParams.get('account'));
  
  this.account=this.navParams.get('account');
  console.log(this.account);
  
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: ['']
    });

 this.currentItems = this.items.query();
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteProfilePage');
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

  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}

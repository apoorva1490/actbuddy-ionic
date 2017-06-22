import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';
import { CompleteProfilePage } from '../complete-profile/complete-profile';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { firstname?: string, lastname?: string, email?: string, password?: string, dob?: string } = {};
 
  submitted: boolean = false;

  isSelectedButton: boolean = true;
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  onSignup(form: NgForm) {

    this.submitted = true;

    if (form.valid) {
    //   this.userData.signup(this.signup.username);
    //   this.navCtrl.push(TabsPage);
    // }
    // Attempt to login in through our User service


    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(CompleteProfilePage, {
        account : this.account
      });
    }, (err) => {
      this.submitted=false;

      this.navCtrl.push(CompleteProfilePage,
      {
        account : this.account
      }); // TODO: Remove this when you add your signup endpoint

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  }

logEvent(event) {
  console.log(event);
  console.log(this.isSelectedButton);
  this.isSelectedButton = !this.isSelectedButton;
}

}

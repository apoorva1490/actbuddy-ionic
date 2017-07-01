import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';
import { TranslateService } from '@ngx-translate/core';
import { SchedulePage } from '../../schedule/schedule';

import { AuthProvider } from '../../providers/auth';


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  error :any;

  // Our translated text strings
  private loginErrorString: string;
  submitted = false;

 account: { username?: string, password?: string } = {
    // username: 'test123',
    // password: 'test'
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private auth: AuthProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  doLogin(form) {
    this.submitted = true;
    if (form.valid) {
    
     this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}

loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(data => {
      this.navCtrl.setRoot(MainPage);
    }, err => {
      this.error = err;
    });
  }

  loginUserWithGoogle() {
    this.auth.loginUserWithGoogle.subscribe(data => {
      this.navCtrl.setRoot(MainPage);
    }, err => {
      this.error = err;
    });
  }

  loginUserWithTwitter() {
    this.auth.loginUserWithTwitter.subscribe(data => {
      this.navCtrl.setRoot(MainPage);
    }, err => {
      this.error = err;
    });
  }


  signup() {
    this.navCtrl.push(SignupPage);
  }
}

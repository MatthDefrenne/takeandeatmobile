import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, App, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { RestaurantsPage } from '../restaurants/restaurants';
import { CreateAccountPage } from '../create-account/create-account';
import { SignInPage } from '../sign-in/sign-in';

import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController,
    public afA: AngularFireAuth, 
    public loadingCtrl: LoadingController) {}



  sendCreateAccountPage() {
    let createAccountPageModal = this.modalCtrl.create(CreateAccountPage);
    createAccountPageModal.present();
  }

  sendSignInPage() {
    let SignInPageModal = this.modalCtrl.create(SignInPage);
    SignInPageModal.present();
  }

  
}

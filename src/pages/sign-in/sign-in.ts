import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { RestaurantsPage } from '../restaurants/restaurants';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

 constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController,
    public afA: AngularFireAuth) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  signIn(email: string, password: string) {
    let loading = this.loadingCtrl.create({
      content: 'Chargement...'
    });
    loading.present();
    
    this.afA.auth.signInWithEmailAndPassword(email, password).then(() => {
        this.navCtrl.setRoot(RestaurantsPage);
        loading.dismiss();
    })
  }
}

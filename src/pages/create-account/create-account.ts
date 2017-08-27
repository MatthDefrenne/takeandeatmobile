import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { AngularFireAuth } from 'angularfire2/auth'

/**
 * Generated class for the CreateAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {



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


  createUserWithEmailAndPassword(email: string, password: string){
    let loading = this.loadingCtrl.create({
      content: 'Chargement...'
        });
    loading.present();

   this.afA.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.signIn(email, password, loading)
   })
  }


  signIn(email: string, password: string, loading) {
    this.afA.auth.signInWithEmailAndPassword(email, password).then(() => {
        this.navCtrl.setRoot(RestaurantsPage);
        loading.dismiss();
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'
import firebase from 'firebase';
import moment from 'moment';
moment.locale('fr');

/**
 * Generated class for the OrdersListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders-list',
  templateUrl: 'orders-list.html',
})
export class OrdersListPage {

  myOrders: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afD: AngularFireDatabase, public loadingCtrl: LoadingController) {


     let loading = this.loadingCtrl.create({
          content: 'Chargement...'
      });
    
      loading.present();

    this.myOrders = this.afD.list('orders', {query: {
      orderByChild: 'userId',
      equalTo: firebase.auth().currentUser.uid
    }}).map(orders => orders.reverse())  as FirebaseListObservable<any[]>;


    this.myOrders.subscribe((orders) => {
      console.log(orders);
      loading.dismiss();
    })
  }


  returnFromNow(date) {
      return moment(date).fromNow();
  }


}

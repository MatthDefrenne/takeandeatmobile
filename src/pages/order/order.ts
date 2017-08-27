import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'
import { CartProvider } from '../../providers/cart/cart';
import { OrdersListPage } from '../orders-list/orders-list'

import firebase from 'firebase';
declare var FCMPlugin: any

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  cartContainer: Array<any>
  restaurant: any;
  uidRestaurant: any;
  FCMToken: any;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public afD: AngularFireDatabase,     
    public viewCtrl: ViewController, 
    public cartProvider: CartProvider) {
      this.cartContainer = navParams.get('basket');
      this.restaurant = navParams.get('restaurant');
      this.uidRestaurant = navParams.get('uid');
    if(typeof(FCMPlugin) !== "undefined"){
      FCMPlugin.getToken((token) => {
          this.FCMToken = token
      })
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  generateOrderId() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text.toUpperCase();
  }


  validatePanier() {
    let userId = firebase.auth().currentUser.uid;
    const order = this.afD.list('orders/');
      order.push({
      orderId: this.generateOrderId(),
      stats: 0,
      userId: userId,
      restaurant: this.restaurant,
      uid: this.uidRestaurant,
      cart: this.cartProvider.cart,
      token: this.FCMToken || null,
      totalPrice: this.cartProvider.cartPrice,
      date: firebase.database.ServerValue.TIMESTAMP
    })

    this.navCtrl.setRoot(OrdersListPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { OrdersListPage } from '../orders-list/orders-list'
import { ProfilePage } from '../profile/profile'

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  restaurantPage: any;
  orderPage: any;
  profilePage: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.restaurantPage = RestaurantsPage;
    this.orderPage = OrdersListPage;
    this.profilePage = ProfilePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

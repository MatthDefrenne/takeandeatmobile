import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'
import { MenusPage } from '../menus/menus'
import { FilterRestaurantPage } from '../filter-restaurant/filter-restaurant'
import { OrdersListPage } from '../orders-list/orders-list'
import firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation';
import gpsDistance from "gps-distance";
/**
 * Generated class for the RestaurantsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants: FirebaseListObservable<any[]>
  positionArray: Array<any>;
  restaurantsCount: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public afD: AngularFireDatabase, 
    public loadingCtrl: LoadingController, 
    public geolocation: Geolocation,
    public modalCtrl: ModalController
  ) {

    this.getRestaurant();
    
  }

  getRestaurant(category?) {

    if(category) {
      console.log(category);
        this.restaurants = this.afD.list('restaurants', { query: {
          orderByChild: "category",
          equalTo: category
        }});
    } else {
        this.restaurants = this.afD.list('restaurants');
    }

    let loading = this.loadingCtrl.create({
          content: 'Chargement...'
      });

    loading.present();

     this.restaurants.subscribe((restaurants) => {
       console.log(restaurants);
       loading.dismiss();
    });

  }

  selectRestaurant(restaurant) {
    console.log('Select restaurant', restaurant)
      this.navCtrl.push(MenusPage, {
        restaurant: restaurant,
        uid: restaurant.$key
      })
  }


  pushModalFilter() {
     let modal = this.modalCtrl.create(FilterRestaurantPage);
     modal.onDidDismiss((filter) => {
        this.getRestaurant(filter.category)
     })
    modal.present();
  }

  pushOrdersList() {
    this.navCtrl.push(OrdersListPage);
  }


}

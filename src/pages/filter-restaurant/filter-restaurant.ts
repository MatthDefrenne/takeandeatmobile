import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterRestaurantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-restaurant',
  templateUrl: 'filter-restaurant.html',
})
export class FilterRestaurantPage {

  filters: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.filters = [
      {
        name: "Frites",
        category: 1,
        img: '004-fries.png'
      },
      {
        name: "Pâtes",
        category: 2,
        img: '002-spaghetti.png'
      },
      {
        name: "Sandwiches",
        category: 3,
        img: '003-sandwich.png'
      },
      {
        name: "Pizzas",
        category: 4,
        img: '005-pizza.png'
      },
      {
        name: "Kebab",
        category: 5,
        img: '001-food.png'
      },
    ]
  }

  selectAndDismiss(item) {
    this.viewCtrl.dismiss(item);
  }

}

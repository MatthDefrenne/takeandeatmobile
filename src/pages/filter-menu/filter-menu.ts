import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-menu',
  templateUrl: 'filter-menu.html',
})
export class FilterMenuPage {

    filters: Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.filters = [
       {
        name: "Tous les produits",
       },
      {
        name: "Boissons",
        category: 1
      },
      {
        name: "Végétarien",
        category: 2
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterMenuPage');
  }

}

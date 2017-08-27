import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'
import { OrderPage } from '../order/order'
import { CartProvider } from '../../providers/cart/cart';
import _ from "lodash";


/**
 * Generated class for the MenusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {


  menu: FirebaseListObservable<any[]>
  public name: string;
  public restaurant: any;
  public uid: any;
  basket: Array<Object>;
  private lastItem;
  public menuTabs;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public afD: AngularFireDatabase,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public cartProvider : CartProvider,
    public toastCtrl: ToastController
  ) {

     this.restaurant = navParams.get('restaurant');
     this.uid = navParams.get('uid');

     console.log('RestaurantId', this.restaurant);
     this.getMenuByRestaurantId(this.restaurant.id);
     this.cartProvider.cart = [];
     this.cartProvider.cartPrice = 0;
  }

  getMenuByRestaurantId(restaurantId, val?) {

    let loading = this.loadingCtrl.create({
      content: 'Chargement...'
        });
    loading.present();


    if(val) {
        this.menu = this.afD.list('restaurants/' + this.uid +  '/menus', { query: {
          orderByChild: "name",
          equalTo: val 
        }});
    } else {
        this.menu = this.afD.list('restaurants/' + this.uid + '/menus');
    }

    this.menu.subscribe((menu) => {
      console.log('Menu in restaurant id', menu)
      loading.dismiss();
    })
     
  }

  addSupplement(supp, item) {
    let suppAdded = _.find(item.supplementsAdded, { 'name': supp.name});
    if(suppAdded) {
      console.log('founded', suppAdded)
      _.remove(item.supplementsAdded, function(supplement) {
        return supplement.name == suppAdded.name;  
      });
      item.price -= supp.price
    } else {
      if(!item.supplementsAdded) {
        item.supplementsAdded = [];
      }
        item.supplementsAdded.push(supp)
        item.price += supp.price
    }
 }

  addItemToCart(item) {
      this.lastItem = _.cloneDeep(item);
    if(item.supplements) {
      item.showSupplement = !item.showSupplement;
    } else {
       this.cartProvider.pushItemToCart(item);
       let toast = this.toastCtrl.create({
      message:  item.name + 'a été ajouté à votre panier',
      duration: 3000
    });
    toast.present();
    }
  }
  
  pushItemWithSupplement(item) {
       this.cartProvider.pushItemToCart(_.clone(item));
    item.supplementsAdded = this.lastItem.supplementsAdded;
    item.price = this.lastItem.price;
    let toast = this.toastCtrl.create({
      message:  item.name + 'a été ajouté à votre panier',
      duration: 3000
    });
    toast.present();
  }


  getItems(event) {
      let val = event.target.value;
      this.getMenuByRestaurantId(this.restaurant, val);
  }

  accessToBasket() {
     let profileModal = this.modalCtrl.create(OrderPage, {
       restaurant: this.restaurant,
       uid: this.uid
     });
   profileModal.present();
  }
}

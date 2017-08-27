import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'

import 'rxjs/add/operator/map';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CartProvider {


  cart: Array<any>;
  cartPrice: any;


  constructor(    public afD: AngularFireDatabase,     ) {
    this.cart = [];
    this.cartPrice = 0;
  }


  pushItemToCart(item) {
    console.log('item added in cart', item);
     this.cartPrice += item.price
     this.cart.push(item);
  }





}

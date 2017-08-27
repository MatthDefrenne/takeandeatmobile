import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { LoginPage } from '../pages/login/login';
import { MenusPage } from '../pages/menus/menus';
import { OrderPage } from '../pages/order/order';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { SignInPage } from '../pages/sign-in/sign-in';
import { FilterRestaurantPage } from '../pages/filter-restaurant/filter-restaurant';
import { OrdersListPage } from '../pages/orders-list/orders-list'
import { TabsPage } from '../pages/tabs/tabs'
import { ProfilePage } from '../pages/profile/profile'

import { Geolocation } from '@ionic-native/geolocation';


export const firebaseConfig = {
  apiKey: "AIzaSyDxUy_yZ66I87mbIjHAdNiPOpzbYD8nua0",
    authDomain: "takeandeat-9c8e0.firebaseapp.com",
    databaseURL: "https://takeandeat-9c8e0.firebaseio.com",
    projectId: "takeandeat-9c8e0",
    storageBucket: "takeandeat-9c8e0.appspot.com",
    messagingSenderId: "1013134863937"
};



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { CartProvider } from '../providers/cart/cart';
import { RestaurantsProvider } from '../providers/restaurants/restaurants';
import { MenuProvidersProvider } from '../providers/menu-providers/menu-providers';



@NgModule({
  declarations: [
    MyApp,
     RestaurantsPage,
    LoginPage,
    MenusPage,
    OrderPage,
    CreateAccountPage,
    SignInPage,
    FilterRestaurantPage,
    OrdersListPage,
    TabsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RestaurantsPage,
    LoginPage,
    MenusPage,
    OrderPage,
    CreateAccountPage,
    SignInPage,
    FilterRestaurantPage,
    OrdersListPage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider,
    RestaurantsProvider,
    MenuProvidersProvider,
  ]
})
export class AppModule {}

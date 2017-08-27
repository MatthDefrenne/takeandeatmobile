import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AngularFireAuth } from 'angularfire2/auth'
import { Geolocation } from '@ionic-native/geolocation';

import gpsDistance from "gps-distance";
import firebase from 'firebase';

declare var FCMPlugin: any

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // On va redigirer la personne vers la page en fonction de son status de connexion
  rootPage:any;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afA: AngularFireAuth, public geolocation: Geolocation) {
 
    platform.ready().then(() => {
       const unsubscribe = this.afA.auth.onAuthStateChanged( user => {
      if (user){
        this.rootPage = TabsPage;
        unsubscribe();
      } else {
          this.rootPage = LoginPage;
        unsubscribe();
      }
    });
      
      this.getNotification();
      statusBar.styleDefault();
    });
  }


  getNotification() {
    if(typeof(FCMPlugin) !== "undefined"){
      FCMPlugin.getToken(function(token){
        
      });
      
      FCMPlugin.onNotification(function(d){
      if(d.wasTapped){  
        // Background recieval (Even if app is closed),
        //   bring up the message in UI
      } else {
        // Foreground recieval, update UI or what have you...
      }
    }, function(msg){
      // No problemo, registered callback
    }, function(err){
      console.log("Arf, no good mate... " + err);
    });
  } else console.log("Notifications disabled, only provided in Android/iOS environment");
  }

 
  
}


import { Component, OnInit } from '@angular/core';
import { Plugins, PushNotificationToken } from '@capacitor/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

const {PushNotifications} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    console.log('initializing AppComponent');

    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        PushNotifications.register();
      } else {
        console.log('No permission for push notifications');
      }
    });

    PushNotifications.addListener('registration', (token: PushNotificationToken) =>
      console.log(`Push Notification success, token: ${ token.value }`));

    PushNotifications.addListener('registrationError', error =>
      console.log(`Error on registration: ${ error }`));

    PushNotifications.addListener('pushNotificationReceived', notification =>
      console.log(`Push received: ${ JSON.stringify(notification) }`));

    PushNotifications.addListener('pushNotificationActionPerformed', notification =>
      console.log(`Push action performed: ${ notification }`));
  }
}

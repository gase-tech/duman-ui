import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const {Keyboard} = Plugins;

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {

  constructor(public platform: Platform) {
  }

  async showKeyboard() {
    if (this.platform.is('mobile')) {
      Keyboard.show();
    } else {
      alert('Ne yapiyon dayioglu!');
    }
  }
}

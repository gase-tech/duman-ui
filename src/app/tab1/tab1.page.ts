import { Component } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(private keyboardService: KeyboardService) {
  }

  showKeyboard() {
    this.keyboardService.showKeyboard();
  }

}

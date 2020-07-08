import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const {Keyboard} = Plugins;

@Injectable({
	providedIn: 'root',
})
export class KeyboardService {

	constructor() {
	}

	showKeyboard() {
		Keyboard.show();
	}
}

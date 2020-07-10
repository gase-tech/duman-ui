import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  constructor(private qrScanner: QRScanner, public alertController: AlertController, public toastController: ToastController) {
  }

  // TODO: qrcode taramasi acikken geri tusu calismiyor @immino
  scanQrCode() {
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          const ionApp = document.getElementsByTagName('ion-app')[0] as HTMLElement;

          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.presentToast(`QrCode result is: ${ text }`);

            this.qrScanner.hide();
            ionApp.style.display = 'block';
            scanSub.unsubscribe();
          });

          // show camera preview
          ionApp.style.display = 'none';
          this.qrScanner.show();
        } else if (status.denied) {
          this.qrScanner.openSettings();
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    await toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Camera permission denied!',
      message: 'For use QrCode Scanner you must give permission to access camera, are you want to open settings to give permission?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('User not gived permission!');
          },
        }, {
          text: 'Open Settings',
          handler: () => {
            this.qrScanner.openSettings();
          },
        },
      ],
    });

    await alert.present();
  }

  ionViewWillLeave() {
    this.qrScanner.destroy().then();
  }
}

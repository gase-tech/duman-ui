import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';

const {Camera, Filesystem, Storage} = Plugins;

interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  public photos: Photo[] = [];

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    console.log(capturedPhoto.webPath);


    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath,
    });
  }
}

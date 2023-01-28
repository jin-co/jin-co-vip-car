import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  images: string[] = [
    '../../../assets/images/undraw_Towing_re_wesa.png',
    '../../../assets/images/undraw_towing_re_wesa.svg',
    '../../../assets/images/vip_shop.png',
  ];

  idx!: Observable<number>;  
  constructor(private storage: AngularFireStorage) {}

  getIdx(idx: number) {
    this.idx = new Observable((o) => {
      o.next(idx);
    });
  }

  addImage(file: File, filePath: string) {
    this.storage.ref(filePath).put(file);
  }

  getImage() {
    return this.storage.ref('test').getDownloadURL();    
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images:string[] = [
    "../../../assets/images/undraw_Towing_re_wesa.png",
    "../../../assets/images/undraw_towing_re_wesa.svg",
    "../../../assets/images/vip_shop.png",
  ]

  idx!:Observable<number>
  constructor() { }

  getIdx(idx:number) {
    this.idx = new Observable(o => {
      o.next(idx)
    })
  }
}

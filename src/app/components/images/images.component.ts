import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images:string[] = [
    "../../../assets/images/undraw_Towing_re_wesa.png",
    "../../../assets/images/undraw_towing_re_wesa.svg",
    "../../../assets/images/vip_shop.png",
  ]
  idx:number = 0
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.idx++
    }, 1000)
  }
}

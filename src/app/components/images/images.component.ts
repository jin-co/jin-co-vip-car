import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/undraw_Towing_re_wesa.png',
    '../../../assets/images/undraw_towing_re_wesa.svg',
    '../../../assets/images/vip_shop.png',
  ];
  idx: number = 0;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {    
    setTimeout(() => {
      console.log(this.idx)
      this.idx++;
      this.imageService.getIdx(this.idx);
    }, 1000);
    this.imageService.idx.subscribe((idx) => {
      this.idx = idx;
    });
  }
}

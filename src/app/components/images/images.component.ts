import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: string[] = [];  
  imageURL!: Observable<string>;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  onDownloadClick() {
    // console.log(this.imageService.getImage());
    // this.imageURL = this.imageService.getImage();
  }
}

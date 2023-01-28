import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css'],
})
export class ImageAddComponent implements OnInit {
  imageURL!: Observable<any>;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  onImageUpload(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    const filePath = 'test';
    this.imageService.addImage(file as File, filePath)
  }

  onDownloadClick() {
    console.log(this.imageService.getImage())
    this.imageURL = this.imageService.getImage()
  }
}

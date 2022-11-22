import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Clip } from 'src/app/models/clip';
import videojs from 'video.js';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class ClipComponent implements OnInit {
  id!: string;
  @ViewChild('videoPlayer', { static: true }) target?: ElementRef;
  player?: videojs.Player;
  clip?: Clip;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.player = videojs(this.target?.nativeElement);
    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    // });
    this.route.data.subscribe((data) => {
      this.clip = data['clip'] as Clip;
      this.player?.src({
        src: this.clip.url,
        type: 'video/mp4',
      });
    });
  }
}

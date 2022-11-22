import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Clip } from 'src/app/models/clip';
import { ClipService } from 'src/app/services/clip.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  videoOrder: string = '1';
  clips: Clip[] = [];
  activeClip: Clip | null = null;
  sort$: BehaviorSubject<string>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clipService: ClipService,
    private modalService: ModalService
  ) {
    this.sort$ = new BehaviorSubject(this.videoOrder);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: Params) => {
      this.videoOrder = params['sort'] === '2' ? params['sort'] : '1';
      this.sort$.next(this.videoOrder);
    });
    this.clipService.getUserClips(this.sort$).subscribe((docs) => {
      this.clips = [];
      docs.forEach((doc) => {
        this.clips.push({
          docId: doc.id,
          ...doc.data(),
        });
      });
    });
  }

  sort(e: Event) {
    const { value } = e.target as HTMLSelectElement;
    // this.router.navigateByUrl(`/manage?sort=${value}`);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value,
      },
    });
  }

  openModal(e: Event, clip: Clip) {
    e.preventDefault();

    this.activeClip = clip;

    this.modalService.toggleModal('editClip');
  }

  update(e: Clip) {
    this.clips.forEach((el, idx) => {
      if (el.docId == e.docId) {
        this.clips[idx].title = e.title;
      }
    });
  }

  deleteClip(e: Event, clip: Clip) {
    e.preventDefault();

    this.clipService.deleteClip(clip);
    this.clips.forEach((el, idx) => {
      if (el.docId == clip.docId) {
        this.clips.splice(idx, 1);
      }
    });
  }

  async copy(e: MouseEvent, id: string | undefined) {
    e.preventDefault();

    if (!id) return;

    const url = `${location.origin}/clip/${id}`;
    await navigator.clipboard.writeText(url);
    alert('Link copied');
  }
}

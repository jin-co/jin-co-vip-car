import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Clip } from 'src/app/models/clip';
import { ClipService } from 'src/app/services/clip.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy, OnChanges {
  @Input() activeClip: Clip | null = null;

  inSubmission: boolean = false;
  showAlert: boolean = false;
  alertColor: string = 'blue';
  alertMsg: string = 'Updating...';
  @Output() update = new EventEmitter();

  clipId = new FormControl('', {
    nonNullable: true,
  });
  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });
  form = new FormGroup({
    clipId: this.clipId,
    title: this.title,
  });

  constructor(
    private modalService: ModalService,
    private clipService: ClipService
  ) {}

  ngOnInit(): void {
    this.modalService.register('editClip');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.activeClip) {
      return;
    }

    this.clipId.setValue(this.activeClip.docId as string);
    this.title.setValue(this.activeClip.title);
    this.inSubmission = false;
    this.showAlert = false;
  }

  ngOnDestroy(): void {
    this.modalService.unRegister('editClip');
  }

  async onSubmit() {
    if (!this.activeClip) return;
    this.inSubmission = true;
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Updating...';

    try {
      await this.clipService.updateClip(this.clipId.value, this.title.value);
    } catch (error) {
      this.inSubmission = false;
      this.alertColor = 'red';
      this.alertMsg = 'Update failed';
      return;
    }

    this.activeClip.title = this.title.value;
    this.update.emit(this.activeClip);

    this.inSubmission = false;
    this.alertColor = 'green';
    this.alertMsg = 'Update success';
  }
}

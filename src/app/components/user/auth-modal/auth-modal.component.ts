import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-model',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-model.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  
  constructor(public modalService: ModalService) {}  

  ngOnInit(): void {
    this.modalService.register('auth')    
  }

  ngOnDestroy(): void {
    this.modalService.unRegister('auth')
  }
}

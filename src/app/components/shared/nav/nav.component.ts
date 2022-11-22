import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(
    public modalService: ModalService,
    public authService: AuthService,
    private auth: AngularFireAuth
  ) {
    // authService.isAuthenticated$.subscribe((result) => {
    //   this.isAuthenticated = result;
    // });
  }

  ngOnInit(): void {}

  openModal(e: Event) {
    e.preventDefault();
    this.modalService.toggleModal('auth');
  }

  async onLogout() {
    await this.authService.logout();
  }
}

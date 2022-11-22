import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showAlert: boolean = false;
  alertMsg = 'Logging in';
  alertColor = 'blue';
  isSubmission: boolean = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    this.showAlert = true;
    this.alertMsg = 'Logging in';
    this.alertColor = 'blue';
    this.isSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        form.value.email,
        form.value.password
      );
    } catch (error) {
      this.isSubmission = false;
      this.alertMsg = 'Log in failed';
      this.alertColor = 'red';
      return;
    }

    this.alertMsg = 'Logged in';
    this.alertColor = 'green';
  }
}

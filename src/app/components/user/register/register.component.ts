import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.services';
import { EmailTaken } from '../validators/email-taken';
import { RegisterValidator } from '../validators/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showAlert: boolean = false;
  alertMsg: string = 'You account is being created';
  alertColor: string = 'blue';
  inSubmission: boolean = false;

  name = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  email = new UntypedFormControl(
    '',
    [Validators.required, Validators.email],
    [this.emailTaken.validate]
  );
  age = new UntypedFormControl('', [Validators.required, Validators.min(18)]);
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm),
  ]);
  passwordConfirm = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(''),
  ]);
  phone = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11),
  ]);

  form = new UntypedFormGroup(
    {
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      phone: this.phone,
    },
    [RegisterValidator.match('password', 'passwordConfirm')]
  );

  constructor(
    private authService: AuthService,
    private emailTaken: EmailTaken
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    this.showAlert = true;
    this.alertMsg = 'You account is being created';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.authService.createUser(this.form.value);
    } catch (error) {
      console.log(error);
      this.alertMsg = 'Unexpected error occurred';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.alertMsg = 'Account created';
    this.alertColor = 'green';
  }
}

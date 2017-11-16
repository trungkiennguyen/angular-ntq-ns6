import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  formLogin = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

  showLog(f) {
    console.log(f);
  }

  get username() {
    return this.formLogin.get('userName');
  }

  get password() {
    return this.formLogin.get('password');
  }

}

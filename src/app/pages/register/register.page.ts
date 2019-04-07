import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  registerUser: IRegister;

  constructor(
      private formBuilder: FormBuilder,
      private translate: TranslateService,
      private afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.clearInput();
    this.registerForm = this.formBuilder.group({
      email: [this.registerUser.email, Validators.required],
      password: [this.registerUser.password, Validators.required],
    });


  }

  onSubmit() {

  }

  clearInput() {
    this.registerUser = {
      email: null,
      password: null
    };
  }

}

export interface IRegister {
  email: string;
  password: string;
}

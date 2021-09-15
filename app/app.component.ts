import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {validatePassword} from "./passward.validator"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterFormApp';

  UserName = '';
  UserEmail = '';
  UserPassward = '';
  UserHobbies = '';

  isSubmitted = false;

  RegisterForm = new FormGroup({
    Name: new FormControl('', [Validators.required]) ,
    Email: new FormControl('', [Validators.required , Validators.email]) ,
    Passward: new FormControl('', [Validators.required]) ,
    ConfirmPassward: new FormControl('', [Validators.required ]) ,
    Hobbies: new FormControl('', [Validators.required])
  } , validatePassword )

  get Name() {
    return this.RegisterForm.get('Name');
  } 

  get Email() {
    return this.RegisterForm.get('Email');
  } 

  get Passward() {
    return this.RegisterForm.get('Passward');
  }

  get ConfirmPassward() {
    return this.RegisterForm.get('ConfirmPassward');
  }

  get Hobbies() {
    return this.RegisterForm.get('Hobbies');
  } 

  onSubmit() {
    console.log(this.RegisterForm);

    this.UserName = this.RegisterForm.value.Name;
    this.UserEmail = this.RegisterForm.value.Email;
    this.UserPassward = this.RegisterForm.value.Passward;
    this.UserHobbies = this.RegisterForm.value.Hobbies;

    this.isSubmitted = true;

}


}

import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true // This allows the component to be used without being declared in an NgModule
})
export class Login {
  showPassword: boolean = false;
loginForm:FormGroup = new FormGroup({
  email : new FormControl(null, [Validators.email, Validators.required]),
  password : new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
});
submitForm(form:FormGroup) {
  // Check if the form is valid
      console.log('Form submitted:', form);

  // if (form.valid) {
  //   // Perform login logic here
  //   // Reset the form after submission
  //   form.reset();
  // } else {
  //   // Handle invalid form case
  //   console.error('Form is invalid');
  // }
}
showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../../login/login';
import { Register } from '../../register/register';
import { RouterModule, Routes } from '@angular/router';
const routes = [
  // Define your routes here
  { path: "login", component: Login, title: 'Login' }, // Assuming you have a LoginComponent for login functionality
  { path: "register", component: Register, title: 'Register' }, // Assuming you have a LoginComponent for login functionality
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }

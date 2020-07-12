import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SigninMainComponent } from './signin-main/signin-main.component';
import { SigninMultifactorComponent } from './signin-multifactor/signin-multifactor.component';

@NgModule({
  declarations: [
    SigninMainComponent,
    SigninMultifactorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SigninModule { }

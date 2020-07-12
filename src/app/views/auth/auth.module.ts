import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { ForgotModule } from './forgot/forgot.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    // Modules
    ForgotModule,
    SigninModule,
    SignupModule
  ]
})
export class AuthModule { }

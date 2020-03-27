import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { ControlsModule } from '../controls/controls.module';

// Components
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule
  ],
  entryComponents: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material


// Modules
import { AnimationsModule } from 'src/app/core/animations/animations.module';
import { ControlsModule } from '../controls/controls.module';

// Components
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';

import { SignupComponent } from './signup/signup.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { AccountComponent } from './signup/account/account.component';
import { SubscriptionComponent } from './signup/subscription/subscription.component';
import { AppearanceComponent } from './signup/appearance/appearance.component';

import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,

    SignupComponent,
    PersonalComponent,
    AccountComponent,
    SubscriptionComponent,
    AppearanceComponent,

    ForgotComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AnimationsModule,
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

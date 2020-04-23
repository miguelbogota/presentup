import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { ControlsModule } from '../controls/controls.module';
import { LoadersModule } from '../loaders/loaders.module';
// Components
import { ForgotComponent } from './forgot/forgot.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { AccountComponent } from './signup/account/account.component';
import { AboutComponent } from './signup/about/about.component';
import { SubscriptionComponent } from './signup/subscription/subscription.component';
import { AppearanceComponent } from './signup/appearance/appearance.component';

@NgModule({
  declarations: [
    ForgotComponent,
    SigninComponent,
    SignupComponent,
    PersonalComponent,
    AccountComponent,
    AboutComponent,
    AppearanceComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    LoadersModule
  ]
})
export class AuthenticationModule { }

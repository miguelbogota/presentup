import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// State manehment
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { SignupState } from './signup/signup.state';
// Modules
import { ControlsModule } from '../controls/controls.module';
import { LoadersModule } from '../loaders/loaders.module';
// Components
import { ForgotComponent } from './forgot/forgot.component';
import { SigninComponent } from './signin/signin.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { AccountComponent } from './signup/account/account.component';
import { AboutComponent } from './signup/about/about.component';
import { SubscriptionComponent } from './signup/subscription/subscription.component';
import { AppearanceComponent } from './signup/appearance/appearance.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    ForgotComponent,
    SigninComponent,
    // Signup
    PersonalComponent,
    AccountComponent,
    AboutComponent,
    AppearanceComponent,
    SubscriptionComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxsModule.forRoot([SignupState], { developmentMode: !environment.production }),
    ReactiveFormsModule,
    ControlsModule,
    LoadersModule
  ]
})
export class AuthenticationModule { }

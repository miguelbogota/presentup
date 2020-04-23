import { Routes } from '@angular/router';
// Components
import { ForgotComponent } from './forgot/forgot.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { AccountComponent } from './signup/account/account.component';
import { AboutComponent } from './signup/about/about.component';
import { AppearanceComponent } from './signup/appearance/appearance.component';
import { SubscriptionComponent } from './signup/subscription/subscription.component';

export const AuthenticationRoutes: Routes = [
  { path: 'forgot', component: ForgotComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      { path: '', component: PersonalComponent },
      { path: 'account', component: AccountComponent },
      { path: 'about', component: AboutComponent },
      { path: 'appearance', component: AppearanceComponent },
      { path: 'subscription', component: SubscriptionComponent },
    ]
  }
];

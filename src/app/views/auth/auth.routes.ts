import { Routes } from '@angular/router';
// Components
import { ForgotMainComponent } from './forgot/forgot-main/forgot-main.component';
import { ForgotCodeComponent } from './forgot/forgot-code/forgot-code.component';
import { ForgotResetComponent } from './forgot/forgot-reset/forgot-reset.component';
import { SigninMainComponent } from './signin/signin-main/signin-main.component';
import { SigninMultifactorComponent } from './signin/signin-multifactor/signin-multifactor.component';
import { SignupMainComponent } from './signup/signup-main/signup-main.component';
import { SignupProfileComponent } from './signup/signup-profile/signup-profile.component';
import { SignupAboutComponent } from './signup/signup-about/signup-about.component';
import { SignupAppearanceComponent } from './signup/signup-appearance/signup-appearance.component';
import { SignupPremiumComponent } from './signup/signup-premium/signup-premium.component';

export const AuthRoutes: Routes = [
  // Authentication - Might change in the future to another page
  {
    path: 'forgot', // Forgot password page
    children: [
      { path: '', component: ForgotMainComponent }, // Recovery options
      { path: 'code', component: ForgotCodeComponent }, // Recovery code
      { path: 'reset', component: ForgotResetComponent }, // Reset password
      { path: '**', redirectTo: '', pathMatch: 'full' } // Error
    ]
  },
  {
    path: 'signin', // Signin page
    children: [
      { path: '', component: SigninMainComponent }, // Signin
      { path: 'multifactor', component: SigninMultifactorComponent }, // Set account
      { path: '**', redirectTo: '', pathMatch: 'full' } // Error
    ]
  },
  {
    path: 'signup', // Signup page
    children: [
      { path: '', component: SignupMainComponent }, // Only get name and email
      { path: 'profile', component: SignupProfileComponent }, // Set account
      { path: 'about', component: SignupAboutComponent }, // Profile description
      { path: 'appearance', component: SignupAppearanceComponent }, // Design to use
      { path: 'premium', component: SignupPremiumComponent }, // Premium plan
      { path: '**', redirectTo: '', pathMatch: 'full' } // Error
    ]
  },
];

import { Routes } from '@angular/router';
// Guards
import { UnsignedGuard } from 'src/app/core/guards/auth/unsigned.guard';
// Components
import { AuthenticationComponent } from './authentication.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SigninComponent } from './signin/signin.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { AccountComponent } from './signup/account/account.component';
import { AboutComponent } from './signup/about/about.component';
import { AppearanceComponent } from './signup/appearance/appearance.component';
import { SubscriptionComponent } from './signup/subscription/subscription.component';

/**
 * The routes will have children in case somebody type a wrong
 * address will re-direct to the actual component.
 *
 * As well all the routes will be send to AuthenticationComponent
 * And this will route them to the requested component
 */
export const AuthenticationRoutes: Routes = [
  {
    path: 'forgot',
    component: AuthenticationComponent,
    canActivate: [UnsignedGuard],
    children: [
      { path: '', component: ForgotComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  {
    path: 'signin',
    component: AuthenticationComponent,
    canActivate: [UnsignedGuard],
    children: [
      { path: '', component: SigninComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  {
    path: 'signup',
    component: AuthenticationComponent,
    canActivate: [UnsignedGuard],
    children: [
      { path: '', component: PersonalComponent },
      { path: 'account', component: AccountComponent },
      { path: 'about', component: AboutComponent },
      { path: 'appearance', component: AppearanceComponent },
      { path: 'subscription', component: SubscriptionComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

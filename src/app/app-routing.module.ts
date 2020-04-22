import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './modules/landing/landing.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { NotFoundComponent } from './modules/landing/pages/not-found/not-found.component';

/* Childrens can not be added due to the way routing is handle */
const routes: Routes = [
  // Main page and its routes will be handle by the landing component
  { path: '', component: LandingComponent },
  { path: 'pricing', component: LandingComponent },
  { path: 'features', component: LandingComponent },
  // Legal pages redirect to the legal component
  { path: 'privacy', component: LandingComponent },
  { path: 'terms', component: LandingComponent },
  // Auth pages to the auth component
  { path: 'signin', component: LandingComponent },
  { path: 'signup', component: LandingComponent },
  { path: 'signup/account', component: LandingComponent },
  { path: 'signup/about', component: LandingComponent },
  { path: 'signup/appearance', component: LandingComponent },
  { path: 'signup/subscription', component: LandingComponent },
  { path: 'forgot', component: LandingComponent },
  // Navigation to redirect to the error
  { path: 'error', component: NotFoundComponent },
  // Settings path with its children - Auth in this components
  { path: 'settings', redirectTo: 'settings/account', pathMatch: 'full' }, // No access to the settings directly
  { path: 'settings/account', component: SettingsComponent }, // Account settings
  { path: 'settings/appearance', component: SettingsComponent }, // Appearance settings
  { path: 'settings/statistics', component: SettingsComponent }, // Statistics settings
  { path: 'settings/subscription', component: SettingsComponent }, // Subscription settings
  { path: 'settings/**', redirectTo: 'settings/account', pathMatch: 'full' }, // In case nothing is found send to the account settings
  // Components and routes below will be handle in the user component due to designs
  { path: ':username', component: ProfileComponent },
  { path: ':username/contact', component: ProfileComponent },
  { path: ':username/portfolio', component: ProfileComponent },
  { path: ':username/messages', component: ProfileComponent }, // Auth in this component
  { path: ':username/messages/:id', component: ProfileComponent },  // Auth in this component
  // Error handler in case no navigation available
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

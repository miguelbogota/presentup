import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './components/shared/landing/landing.component';
import { LegalComponent } from './components/shared/legal/legal.component';
import { AuthComponent } from './components/shared/auth/auth.component';
import { SettingsComponent } from './components/shared/settings/settings.component';
import { UserDesignComponent } from './components/shared/handlers/user-design/user-design.component';
import { NotFoundComponent } from './components/shared/handlers/not-found/not-found.component';

/* Childrens can not be added due to the way routing is handle */
const routes: Routes = [
  // Main page and its routes will be handle by the landing component
  { path: '', component: LandingComponent },
  { path: 'pricing', component: LandingComponent },
  { path: 'features', component: LandingComponent },
  // Legal pages redirect to the legal component
  { path: 'privacy', component: LegalComponent },
  { path: 'terms', component: LegalComponent },
  // Auth pages to the auth component
  { path: 'signin', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'forgot', component: AuthComponent },
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
  { path: ':id', component: UserDesignComponent },
  { path: ':id/contact', component: UserDesignComponent },
  { path: ':id/portfolio', component: UserDesignComponent },
  { path: ':id/messages', component: UserDesignComponent }, // Auth in this component
  { path: ':id/messages/:id', component: UserDesignComponent },  // Auth in this component
  // Error handler in case no navigation available
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

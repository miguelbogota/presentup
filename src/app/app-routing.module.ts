import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PageComponent } from './components/shared/page/page.component';
import { SettingsComponent } from './components/shared/settings/settings.component';

import { HandlerUserComponent } from './components/shared/handlers/handler-user/handler-user.component';
import { HandlerErrorComponent } from './components/shared/handlers/handler-error/handler-error.component';

/* Childrens can not be added due to the way routing is handle */
const routes: Routes = [
  // Main page and its routes will be handle by the page component
  { path: '', component: PageComponent },
  { path: 'privacy', component: PageComponent },
  { path: 'pricing', component: PageComponent },
  { path: 'signin', component: PageComponent },
  { path: 'signup', component: PageComponent },
  // Navigation to redirect to the error
  { path: 'error', component: HandlerErrorComponent },
  // Settings path with its children - Auth in this components
  { path: 'settings', redirectTo: 'settings/account', pathMatch: 'full' }, // No access to the settings directly
  { path: 'settings/account', component: SettingsComponent }, // Account settings
  { path: 'settings/appearance', component: SettingsComponent }, // Appearance settings
  { path: 'settings/statistics', component: SettingsComponent }, // Statistics settings
  { path: 'settings/subscription', component: SettingsComponent }, // Subscription settings
  { path: 'settings/**', redirectTo: 'settings/account', pathMatch: 'full' }, // In case nothing is found send to the account settings
  // Components and routes below will be handle in the user component due to designs
  { path: ':id', component: HandlerUserComponent },
  { path: ':id/contact', component: HandlerUserComponent },
  { path: ':id/portfolio', component: HandlerUserComponent },
  { path: ':id/messages', component: HandlerUserComponent }, // Auth in this component
  { path: ':id/messages/:id', component: HandlerUserComponent },  // Auth in this component
  // Error handler in case no navigation available
  { path: '**', component: HandlerErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

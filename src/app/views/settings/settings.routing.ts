import { Routes } from '@angular/router';
// Components
import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsPrivacyComponent } from './settings-privacy/settings-privacy.component';
import { SettingsSecurityComponent } from './settings-security/settings-security.component';

export const SettingsRoutes: Routes = [
  {
    path: 'settings', // Settings page - Might change in the future to another page
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' }, // Can't have direct access
      { path: 'account', component: SettingsAccountComponent }, // Account and premium
      { path: 'profile', component: SettingsProfileComponent }, // Profile, appareance and privacy for some fields
      { path: 'privacy', component: SettingsPrivacyComponent },
      { path: 'security', component: SettingsSecurityComponent },
      { path: '**', redirectTo: 'account', pathMatch: 'full' } // Error
    ]
  }
];

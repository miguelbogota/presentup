import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsPrivacyComponent } from './settings-privacy/settings-privacy.component';
import { SettingsSecurityComponent } from './settings-security/settings-security.component';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsAccountComponent,
    SettingsProfileComponent,
    SettingsPrivacyComponent,
    SettingsSecurityComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SettingsModule { }

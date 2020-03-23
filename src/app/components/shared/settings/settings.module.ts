import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsAppearanceComponent } from './settings-appearance/settings-appearance.component';
import { SettingsStatisticsComponent } from './settings-statistics/settings-statistics.component';
import { SettingsSubscriptionComponent } from './settings-subscription/settings-subscription.component';
import { SettingsNavigationComponent } from './settings-navigation/settings-navigation.component';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsAccountComponent,
    SettingsAppearanceComponent,
    SettingsStatisticsComponent,
    SettingsSubscriptionComponent,
    SettingsNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }

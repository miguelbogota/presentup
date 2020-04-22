import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './pages/settings-account/settings-account.component';
import { SettingsAppearanceComponent } from './pages/settings-appearance/settings-appearance.component';
import { SettingsStatisticsComponent } from './pages/settings-statistics/settings-statistics.component';
import { SettingsSubscriptionComponent } from './pages/settings-subscription/settings-subscription.component';
import { SettingsNavigationComponent } from './components/settings-navigation/settings-navigation.component';

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

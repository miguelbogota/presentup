import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Modules
import { ControlsModule } from '../controls/controls.module';
// Components
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    AppearanceComponent,
    StatisticsComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ControlsModule
  ]
})
export class SettingsModule { }

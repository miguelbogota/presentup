import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { SettingsComponent } from './settings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    SettingsComponent,
    NavigationComponent,
    AccountComponent,
    AppearanceComponent,
    StatisticsComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SettingsModule { }

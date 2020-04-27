import { Routes } from '@angular/router';
// Guards
import { SignedGuard } from 'src/app/core/guards/auth/signed.guard';
// Components
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubscriptionComponent } from './subscription/subscription.component';

export const SettingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [SignedGuard],
    children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' }, // No access to the settings directly
      { path: 'account', component: AccountComponent }, // Account settings
      { path: 'appearance', component: AppearanceComponent }, // Appearance settings
      { path: 'statistics', component: StatisticsComponent }, // Statistics settings
      { path: 'subscription', component: SubscriptionComponent }, // Subscription settings
      { path: '**', redirectTo: 'account', pathMatch: 'full' } // In case nothing is found send to the account settings
    ]
  }
];

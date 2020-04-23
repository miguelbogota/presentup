import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LandingComponent, pathMatch: 'full' },
      { path: 'features', component: FeaturesComponent },
      { path: 'pricing', component: PricingComponent }
    ]
  }
];

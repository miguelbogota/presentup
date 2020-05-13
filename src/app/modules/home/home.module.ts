import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Modules
import { ControlsModule } from '@app-module/controls/controls.module';
// Components
import { HomeComponent } from './home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule
  ]
})
export class HomeModule { }

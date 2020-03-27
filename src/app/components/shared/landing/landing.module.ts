import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ControlsModule } from '../controls/controls.module';

// Components
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    PricingComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    ControlsModule
  ],
  entryComponents: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }

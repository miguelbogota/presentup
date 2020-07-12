import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Designs
import { BasicModule } from './basic/basic.module';
import { PremiumModule } from './premium/premium.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Designs
    BasicModule,
    PremiumModule
  ]
})
export class DesignsModule { }

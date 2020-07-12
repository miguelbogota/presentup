import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { PremiumComponent } from './premium.component';

@NgModule({
  declarations: [
    PremiumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PremiumComponent
  ]
})
export class PremiumModule { }

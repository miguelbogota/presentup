import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { RollerComponent } from './roller/roller.component';

@NgModule({
  declarations: [
    RollerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RollerComponent
  ]
})
export class LoadersModule { }

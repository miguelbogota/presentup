import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { RollerComponent } from './roller/roller.component';

const loaders = [
  RollerComponent
];

@NgModule({
  declarations: loaders,
  imports: [
    CommonModule
  ],
  exports: loaders
})
export class LoadersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { CropperComponent } from './cropper.component';

@NgModule({
  declarations: [
    CropperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CropperComponent
  ]
})
export class CropperModule { }

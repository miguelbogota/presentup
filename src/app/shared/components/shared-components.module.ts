import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { RollerComponent } from './loaders/roller/roller.component';
import { CropperComponent } from './cropper/cropper.component';

@NgModule({
  declarations: [
    RollerComponent,
    CropperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RollerComponent,
    CropperComponent
  ]
})
export class SharedComponentsModule { }

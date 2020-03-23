import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

// Components

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class AnimationsModule { }

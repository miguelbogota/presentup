import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { FeedbackComponent } from './feedback.component';

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedbackComponent
  ]
})
export class FeedbackModule { }

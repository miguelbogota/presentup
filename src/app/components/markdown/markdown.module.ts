import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { MarkdownComponent } from './markdown.component';

@NgModule({
  declarations: [
    MarkdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarkdownComponent
  ]
})
export class MarkdownModule { }

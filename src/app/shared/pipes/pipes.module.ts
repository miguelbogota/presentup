import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pipes
import { MdToHtmlPipe } from './md-to-html/md-to-html.pipe';

@NgModule({
  declarations: [
    MdToHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MdToHtmlPipe
  ]
})
export class PipesModule { }

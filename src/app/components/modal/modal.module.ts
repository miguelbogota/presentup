import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ForgotMainComponent } from './forgot-main/forgot-main.component';
import { ForgotCodeComponent } from './forgot-code/forgot-code.component';
import { ForgotResetComponent } from './forgot-reset/forgot-reset.component';

@NgModule({
  declarations: [
    ForgotMainComponent,
    ForgotCodeComponent,
    ForgotResetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForgotModule { }

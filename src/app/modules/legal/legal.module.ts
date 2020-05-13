import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Modules
import { ControlsModule } from '@app-module/controls/controls.module';
// Components
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { LegalComponent } from './legal.component';

@NgModule({
  declarations: [
    PrivacyComponent,
    TermsComponent,
    LegalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule
  ]
})
export class LegalModule { }

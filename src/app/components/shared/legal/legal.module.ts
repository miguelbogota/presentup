import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ControlsModule } from '../controls/controls.module';

// Components
import { LegalComponent } from './legal.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    LegalComponent,
    PrivacyComponent,
    TermsComponent],
  imports: [
    CommonModule,
    ControlsModule
  ],
  entryComponents: [
    LegalComponent
  ],
  exports: [
    LegalComponent
  ]
})
export class LegalModule { }

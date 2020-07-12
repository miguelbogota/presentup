import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { LegalComponent } from './legal.component';
import { LegalMainComponent } from './legal-main/legal-main.component';
import { LegalCopyrightComponent } from './legal-copyright/legal-copyright.component';
import { LegalGuidelinesComponent } from './legal-guidelines/legal-guidelines.component';
import { LegalPrivacyComponent } from './legal-privacy/legal-privacy.component';
import { LegalTermsComponent } from './legal-terms/legal-terms.component';

@NgModule({
  declarations: [
    LegalComponent,
    LegalMainComponent,
    LegalCopyrightComponent,
    LegalGuidelinesComponent,
    LegalPrivacyComponent,
    LegalTermsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LegalModule { }

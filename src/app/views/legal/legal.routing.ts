import { Routes } from '@angular/router';
import { LegalComponent } from './legal.component';
// Components
import { LegalMainComponent } from './legal-main/legal-main.component';
import { LegalCopyrightComponent } from './legal-copyright/legal-copyright.component';
import { LegalGuidelinesComponent } from './legal-guidelines/legal-guidelines.component';
import { LegalPrivacyComponent } from './legal-privacy/legal-privacy.component';
import { LegalTermsComponent } from './legal-terms/legal-terms.component';

export const LegalRoutes: Routes = [
  {
    path: 'legal', // Will contain all the terms and conditions of the page - Might change in the future to another page
    component: LegalComponent,
    children: [
      { path: '', component: LegalMainComponent }, // Page with importance of rules and safety content
      { path: 'copyright', component: LegalCopyrightComponent },
      { path: 'guidelines', component: LegalGuidelinesComponent },
      { path: 'privacy', component: LegalPrivacyComponent },
      { path: 'terms', component: LegalTermsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' } // Error
    ]
  }
];

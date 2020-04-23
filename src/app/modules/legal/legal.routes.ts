import { Routes } from '@angular/router';
// Components
import { LegalComponent } from './legal.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

export const LegalRoutes: Routes = [
  {
    path: 'legal',
    component: LegalComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component: TermsComponent }
    ]
  }
];

import { Routes } from '@angular/router';
// Components
import { HelpMainComponent } from './help-main/help-main.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { HelpFaqComponent } from './help-faq/help-faq.component';
import { ErrorComponent } from '@app-views/handlers/error/error.component';

export const HelpRoutes: Routes = [
  {
    path: 'help', // Help page - Might change in the future to another page
    children: [
      { path: '', component: HelpMainComponent }, // Informaction about the other 2 pages below
      { path: 'support', component: HelpSupportComponent }, // This will be the contact us page
      {
        path: 'faq',
        children: [
          { path: '', component: HelpFaqComponent }, // Handle with breadcrumbs
          { path: ':category', component: HelpFaqComponent },
          { path: ':category/:subcategory', component: HelpFaqComponent },
          { path: ':category/:subcategory/:topic', component: HelpFaqComponent },
          { path: '**', component: ErrorComponent } // Error handler, Option to return to help or faq
        ]
      },
      { path: '**', redirectTo: '', pathMatch: 'full' } // Error
    ]
  },
];

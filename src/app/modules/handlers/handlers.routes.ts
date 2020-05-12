import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const HandlersRoutes: Routes = [
  { path: 'error', component: NotFoundComponent },
  // Components and routes below will be handle in the user component due to designs
  { path: ':username', component: ProfileComponent },
  { path: ':username/contact', component: ProfileComponent },
  { path: ':username/portfolio', component: ProfileComponent },
  // Error handler in case no navigation available
  { path: '**', component: NotFoundComponent }
];

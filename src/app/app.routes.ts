import { Routes } from '@angular/router';
// Imported routes
import { AuthenticationRoutes } from './modules/authentication/authentication.routes';
import { HomeRoutes } from './modules/home/home.routes';
import { HandlersRoutes } from './modules/handlers/handlers.routes';
import { LegalRoutes } from './modules/legal/legal.routes';
import { SettingsRoutes } from './modules/settings/settings.routes';

export const AppRoutes: Routes = [
  ...AuthenticationRoutes,
  ...HomeRoutes,
  ...LegalRoutes,
  ...SettingsRoutes,
  ...HandlersRoutes
];

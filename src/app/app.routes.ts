import { Routes } from '@angular/router';
// Imported routes
import { SettingsRoutes } from '@app-views/settings/settings.routing';
import { AuthRoutes } from '@app-views/auth/auth.routes';
import { HelpRoutes } from '@app-views/help/help.routing';
import { LegalRoutes } from '@app-views/legal/legal.routing';
import { HandlersRoutes } from '@app-views/handlers/handlers.routes';

export const AppRoutes: Routes = [
  ...SettingsRoutes,
  ...AuthRoutes,
  ...HelpRoutes,
  ...LegalRoutes,
  ...HandlersRoutes
];

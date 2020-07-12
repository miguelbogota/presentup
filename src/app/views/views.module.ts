import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { AuthModule } from './auth/auth.module';
import { HandlersModule } from './handlers/handlers.module';
import { HelpModule } from './help/help.module';
import { LegalModule } from './legal/legal.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    HandlersModule,
    HelpModule,
    LegalModule,
    SettingsModule
  ]
})
export class ViewsModule { }

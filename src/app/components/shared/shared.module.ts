import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Some modules are not included since they're
// imported within the other modules

// Shared modules
import { AuthModule } from './auth/auth.module';
import { HandlersModule } from './handlers/handlers.module';
import { LandingModule } from './landing/landing.module';
import { LegalModule } from './legal/legal.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Shared
    AuthModule,
    HandlersModule,
    LandingModule,
    LegalModule,
    SettingsModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Modules
import { ControlsModule } from '@app-module/controls/controls.module';
import { LoadersModule } from '@app-module/loaders/loaders.module';
// Designs for the profile
import { DesignsModule } from '@app-module/designs/designs.module';
// Components
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule,
    LoadersModule,
    DesignsModule
  ]
})
export class HandlersModule { }

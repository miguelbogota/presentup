import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Modules
import { ControlsModule } from '../controls/controls.module';
import { LoadersModule } from '../loaders/loaders.module';
// Designs for the profile
import { DesignsModule } from '../designs/designs.module';
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

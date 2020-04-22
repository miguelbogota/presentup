import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ProfileComponent } from './profile.component';

// Designs
import { BasicModule } from './designs/basic/basic.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    // Designs
    BasicModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }

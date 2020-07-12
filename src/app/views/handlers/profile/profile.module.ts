import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// State managment
import { NgxsModule } from '@ngxs/store';
import { environment } from '@app-env/environment';
import { ProfileState } from './_profile.state';
// Imported components
import { LoadersModule } from '@app-components/loaders/loaders.module';
// Components
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    LoadersModule,
    NgxsModule.forRoot([
      ProfileState
    ], { developmentMode: !environment.production })
  ]
})
export class ProfileModule { }

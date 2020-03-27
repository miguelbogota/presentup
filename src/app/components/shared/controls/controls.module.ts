import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CropperComponent } from './cropper/cropper.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    CropperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    CropperComponent
  ]
})
export class ControlsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationsModule } from 'src/app/core/animations/animations.module';

// Components
import { NavigationComponent } from './navigation/navigation.component';
import { NavLinksComponent } from './navigation/nav-links/nav-links.component';
import { NavAccountComponent } from './navigation/nav-account/nav-account.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CropperComponent } from './cropper/cropper.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavLinksComponent,
    NavAccountComponent,

    HeaderComponent,
    FooterComponent,
    CropperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AnimationsModule
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    CropperComponent
  ]
})
export class ControlsModule { }

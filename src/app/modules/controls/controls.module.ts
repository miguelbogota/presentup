import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { CropperComponent } from './cropper/cropper.component';
import { NavigationComponent } from '../controls/navigation/navigation.component';
import { NavLinksComponent } from '../controls/navigation/nav-links/nav-links.component';
import { NavAccountComponent } from '../controls/navigation/nav-account/nav-account.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from '../controls/header/header.component';
import { FooterComponent } from '../controls/footer/footer.component';

@NgModule({
  declarations: [
    CropperComponent,
    NavigationComponent,
    NavLinksComponent,
    NavAccountComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CropperComponent,
    NavigationComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ControlsModule { }

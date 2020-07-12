import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Imported components
import { SearchBarModule } from '@app-components/search-bar/search-bar.module';
import { MenuModule } from '@app-components/menu/menu.module';
// Components
import { ToolbarComponent } from './toolbar.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    AccountMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Imported components
    SearchBarModule,
    MenuModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }

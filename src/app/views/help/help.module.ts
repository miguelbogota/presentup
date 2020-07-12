import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HelpMainComponent } from './help-main/help-main.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { HelpFaqComponent } from './help-faq/help-faq.component';

@NgModule({
  declarations: [
    HelpMainComponent,
    HelpSupportComponent,
    HelpFaqComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HelpModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { BasicComponent } from './basic.component';
import { HeaderComponent } from './header/header.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    BasicComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    BasicComponent
  ],
  exports: [
    BasicComponent
  ]
})
export class BasicModule { }

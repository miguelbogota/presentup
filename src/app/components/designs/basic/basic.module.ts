import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { BasicComponent } from './basic.component';
import { NavigationBasicComponent } from './navigation-basic/navigation-basic.component';
import { HeaderBasicComponent } from './header-basic/header-basic.component';
import { AboutBasicComponent } from './about-basic/about-basic.component';
import { ContactBasicComponent } from './contact-basic/contact-basic.component';
import { PortfolioBasicComponent } from './portfolio-basic/portfolio-basic.component';
import { MessagesBasicComponent } from './messages-basic/messages-basic.component';
import { ChatBasicComponent } from './messages-basic/chat-basic/chat-basic.component';
import { ChatPreviewBasicComponent } from './messages-basic/chat-preview-basic/chat-preview-basic.component';

@NgModule({
  declarations: [
    BasicComponent,
    NavigationBasicComponent,
    HeaderBasicComponent,
    AboutBasicComponent,
    ContactBasicComponent,
    PortfolioBasicComponent,
    MessagesBasicComponent,
    ChatBasicComponent,
    ChatPreviewBasicComponent
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

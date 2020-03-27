import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { BasicComponent } from './basic.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './messages/chat/chat.component';
import { ChatPreviewComponent } from './messages/chat-preview/chat-preview.component';

@NgModule({
  declarations: [
    BasicComponent,
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    MessagesComponent,
    ChatComponent,
    ChatPreviewComponent
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

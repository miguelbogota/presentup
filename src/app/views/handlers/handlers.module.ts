import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Imported components
import { CoverModule } from '@app-components/cover/cover.module';
// Components
import { HomeComponent } from './home/home.component';
import { PremiumComponent } from './premium/premium.component';
import { ExploreComponent } from './explore/explore.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './messages/chat/chat.component';
import { ErrorComponent } from './error/error.component';
// Modules
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    HomeComponent,
    PremiumComponent,
    ExploreComponent,
    FeedComponent,
    SearchComponent,
    MessagesComponent,
    ChatComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Imported components
    CoverModule,
    // Modules
    ProfileModule
  ]
})
export class HandlersModule { }

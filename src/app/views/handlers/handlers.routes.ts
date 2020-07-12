import { Routes } from '@angular/router';
// Components
import { HomeComponent } from './home/home.component';
import { PremiumComponent } from './premium/premium.component';
import { ExploreComponent } from './explore/explore.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './messages/chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

export const HandlersRoutes: Routes = [
  { path: '', component: HomeComponent }, // Main page will have most viral content
  { path: 'premium', component: PremiumComponent }, // Premium plan details like price and features
  { path: 'explore', component: ExploreComponent }, // Explore will have recommendations of conent
  { path: 'feed', component: FeedComponent }, // Feed with people followed
  { path: 'search', redirectTo: '', pathMatch: 'full' }, // Can't have direct access
  { path: 'search/:query', component: SearchComponent }, // Search page
  {
    path: 'messages', // Messages sent from people
    component: MessagesComponent,
    children: [
      { path: ':chat', component: ChatComponent }, // Messages chat
      { path: '**', redirectTo: '', pathMatch: 'full' } // Error
    ]
  },
  { path: 'error', component: ErrorComponent }, // Error page
  // Profile handler
  { path: ':username', component: ProfileComponent }, // User's home page and about section
  { path: ':username/contact', component: ProfileComponent }, // Contact user page
  { path: ':username/feed', component: ProfileComponent }, // User's portfolio and blog
  { path: ':username/feed/:post', component: ProfileComponent }, // User's posts
  { path: ':username/followers', component: ProfileComponent }, // User's follower list
  { path: ':username/following', component: ProfileComponent }, // User's following list
  { path: '**', component: ErrorComponent }, // Error page
];

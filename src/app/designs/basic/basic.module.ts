import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { BasicComponent } from './basic.component';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent,
    AboutComponent,
    ContactComponent,
    FeedComponent,
    PostComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BasicComponent
  ]
})
export class BasicModule { }

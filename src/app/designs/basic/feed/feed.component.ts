import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '@app-core/services/post/post.service';
import { Subscription } from 'rxjs';
import { User } from '@app-models/user.model';
import { Post } from '@app-models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  @Input() user: User;
  posts: Post[] = [];
  postWatch: Subscription;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postWatch = this.postService.watchPostWith('uid', '==', this.user.uid)
      .subscribe(p => this.posts = p);
  }

  ngOnDestroy(): void {
    this.postWatch.unsubscribe();
  }

}

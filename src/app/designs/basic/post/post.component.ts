import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '@app-core/services/post/post.service';
import { Post } from '@app-models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post;
  private postId: string = null;
  private postWatch: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    // Get the id from the route
    this.route.paramMap.subscribe(p => {
      this.postId = p.get('post'); // Store id from the route
    });
  }

  ngOnInit(): void {
    this.postWatch = this.postService.watchPost(this.postId)
      .subscribe(p => {
        this.post = p;
      });
  }

  ngOnDestroy(): void {
    this.postWatch.unsubscribe();
  }

}

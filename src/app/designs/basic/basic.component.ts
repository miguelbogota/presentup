import {
  Component, OnInit, AfterViewInit, Input, ChangeDetectorRef,
  ComponentFactoryResolver, ViewChild, ViewContainerRef
} from '@angular/core';
import { User } from '@app-models/user.model';
import { Router } from '@angular/router';
// Routes
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, AfterViewInit {

  // Store user to show it in all of the components for this design
  @Input() user: User;
  // Routes will be added dynamically
  @ViewChild('router', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Routing
    if (this.router.url.endsWith('/contact')) {
      const factory = this.resolver.resolveComponentFactory(ContactComponent);
      const componentRef = this.content.createComponent(factory);
      componentRef.instance.user = this.user;
    }
    else if (this.router.url.endsWith('/feed')) {
      const factory = this.resolver.resolveComponentFactory(FeedComponent);
      const componentRef = this.content.createComponent(factory);
      componentRef.instance.user = this.user;
    }
    else if (this.router.url.includes('/feed/')) {
      const factory = this.resolver.resolveComponentFactory(PostComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else {
      const factory = this.resolver.resolveComponentFactory(AboutComponent);
      const componentRef = this.content.createComponent(factory);
      componentRef.instance.user = this.user;
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}

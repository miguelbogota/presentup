import {
  Component, OnInit, AfterViewInit, Input, ChangeDetectorRef,
  ComponentFactoryResolver, ViewChild, ViewContainerRef
} from '@angular/core';
import { IUser } from '../../../core/models/user.model';
import { Router } from '@angular/router';

// Components
import { AboutBasicComponent } from './about-basic/about-basic.component';
import { ContactBasicComponent } from './contact-basic/contact-basic.component';
import { PortfolioBasicComponent } from './portfolio-basic/portfolio-basic.component';
import { MessagesBasicComponent } from './messages-basic/messages-basic.component';
import { ChatBasicComponent } from './messages-basic/chat-basic/chat-basic.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, AfterViewInit {

  // Store user to show it in all of the components for this design
  @Input() user: IUser;
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
      const factory = this.resolver.resolveComponentFactory(ContactBasicComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/portfolio')) {
      const factory = this.resolver.resolveComponentFactory(PortfolioBasicComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/messages')) {
      const factory = this.resolver.resolveComponentFactory(MessagesBasicComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.includes('/messages/')) {
      const factory = this.resolver.resolveComponentFactory(ChatBasicComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else {
      const factory = this.resolver.resolveComponentFactory(AboutBasicComponent);
      const componentRef = this.content.createComponent(factory);
      componentRef.instance.user = this.user;
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }
}

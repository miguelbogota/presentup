import {
  Component, OnInit, AfterViewInit, Input, ChangeDetectorRef,
  ComponentFactoryResolver, ViewChild, ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';

// Components
import { PageHomeComponent } from './page-home/page-home.component';
import { PagePrivacyComponent } from './page-privacy/page-privacy.component';
import { PagePricingComponent } from './page-pricing/page-pricing.component';
import { PageSigninComponent } from './page-signin/page-signin.component';
import { PageSignupComponent } from './page-signup/page-signup.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {
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
    if (this.router.url === '/') {
      const factory = this.resolver.resolveComponentFactory(PageHomeComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/privacy')) {
      const factory = this.resolver.resolveComponentFactory(PagePrivacyComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/pricing')) {
      const factory = this.resolver.resolveComponentFactory(PagePricingComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signin')) {
      const factory = this.resolver.resolveComponentFactory(PageSigninComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signup')) {
      const factory = this.resolver.resolveComponentFactory(PageSignupComponent);
      const componentRef = this.content.createComponent(factory);
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}

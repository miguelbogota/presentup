import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { PersonalComponent } from './personal/personal.component';
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { SubscriptionComponent } from './subscription/subscription.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

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
    if (this.router.url.endsWith('/signup')) {
      const factory = this.resolver.resolveComponentFactory(PersonalComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signup/account')) {
      const factory = this.resolver.resolveComponentFactory(AccountComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signup/appearance')) {
      const factory = this.resolver.resolveComponentFactory(AppearanceComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signup/subscription')) {
      const factory = this.resolver.resolveComponentFactory(SubscriptionComponent);
      const componentRef = this.content.createComponent(factory);
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}

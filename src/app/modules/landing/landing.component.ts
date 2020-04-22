import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { HomeComponent } from './pages/main/home/home.component';
import { PricingComponent } from './pages/main/pricing/pricing.component';
import { FeaturesComponent } from './pages/main/features/features.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { TermsComponent } from './pages/legal/terms/terms.component';
import { SigninComponent } from './pages/authentication/signin/signin.component';
import { SignupComponent } from './pages/authentication/signup/signup.component';
import { ForgotComponent } from './pages/authentication/forgot/forgot.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

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
      const factory = this.resolver.resolveComponentFactory(HomeComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/pricing')) {
      const factory = this.resolver.resolveComponentFactory(PricingComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/features')) {
      const factory = this.resolver.resolveComponentFactory(FeaturesComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/privacy')) {
      const factory = this.resolver.resolveComponentFactory(PrivacyComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/terms')) {
      const factory = this.resolver.resolveComponentFactory(TermsComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signin')) {
      const factory = this.resolver.resolveComponentFactory(SigninComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.includes('/signup')) {
      const factory = this.resolver.resolveComponentFactory(SignupComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/forgot')) {
      const factory = this.resolver.resolveComponentFactory(ForgotComponent);
      const componentRef = this.content.createComponent(factory);
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}

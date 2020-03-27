import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';

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
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}

import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';


@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit, AfterViewInit {

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
    if (this.router.url.endsWith('/privacy')) {
      const factory = this.resolver.resolveComponentFactory(PrivacyComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/terms')) {
      const factory = this.resolver.resolveComponentFactory(TermsComponent);
      const componentRef = this.content.createComponent(factory);
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}

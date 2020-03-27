import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {

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
    if (this.router.url.endsWith('/signin')) {
      const factory = this.resolver.resolveComponentFactory(SigninComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('/signup')) {
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

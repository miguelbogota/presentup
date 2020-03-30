import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef, ComponentFactory, Type, ComponentRef } from '@angular/core';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// Components
import { PersonalComponent } from './personal/personal.component';
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

  // Routes will be added dynamically
  @ViewChild('router', { read: ViewContainerRef }) content: ViewContainerRef;
  signupForm: FormGroup; // Form with the data in the sign up page
  currentComponent: ComponentRef<any>; // This will store the current component beign display

  constructor(
    private fb: FormBuilder,
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // Form set up
    this.signupForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      name: ['', [ Validators.required ]],

      uid: ['', [ Validators.required ]],
      pass: ['', [ Validators.required ]],
      cPass: ['', [ Validators.required ]]
    });

    // Event for when the url is change redirect to the right component
    this.location.onUrlChange((url: string) => {
      // Validate to only do it in the sign up page
      if (url.split('/')[1] === 'signup') {
        this.switchComponent(this.getComponentName(url)); // Switch component if url changes
      }
    });

  }

  ngAfterViewInit(): void {
    // Build component from the url
    this.buildComponent(this.getComponentName(this.router.url));
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

  // Function builds a new component
  private buildComponent(name: string): void {
    const factory = this.getComponentToBuild(name); // Component to show the user
    this.currentComponent = this.content.createComponent(factory); // Create component
    this.currentComponent.instance.form = this.signupForm; // Pass the form to the components
    this.currentComponent.instance.step.subscribe((text: string) => {
      this.location.go(`signup${text}`); // Go to the new location
    });
  }

  // Function destroy a component dynamically
  private switchComponent(name: string): void {
    this.currentComponent.destroy();
    this.buildComponent(name);
  }

  // Functions gets the name of the component base on the url
  getComponentName(url: string): string {
    return url.split('/')[url.split('/').length - 1];
  }

  // Function return the component to build
  private getComponentToBuild(name: string): ComponentFactory<any> {
    // Validate the name
    switch (name) {
      // Load personal
      case 'signup': return this.resolver.resolveComponentFactory(PersonalComponent);
      // Load account
      case 'account': return this.resolver.resolveComponentFactory(AccountComponent);
      // Load appearance
      case 'appearance': return this.resolver.resolveComponentFactory(AppearanceComponent);
      // Load subscription
      case 'subscription': return this.resolver.resolveComponentFactory(SubscriptionComponent);
    }
  }

}

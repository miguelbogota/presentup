import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { PageComponent } from './page.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PagePrivacyComponent } from './page-privacy/page-privacy.component';
import { PagePricingComponent } from './page-pricing/page-pricing.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { PageSigninComponent } from './page-signin/page-signin.component';

@NgModule({
  declarations: [
    PageComponent,
    PageNavigationComponent,
    PageHeaderComponent,
    PageHomeComponent,
    PagePrivacyComponent,
    PagePricingComponent,
    PageSigninComponent,
    PageSignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    PageComponent
  ],
  exports: [
    PageComponent,
    PageNavigationComponent
  ]
})
export class PageModule { }

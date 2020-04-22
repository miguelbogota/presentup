import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { LandingComponent } from './landing.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { NavLinksComponent } from './components/navigation/nav-links/nav-links.component';
import { NavAccountComponent } from './components/navigation/nav-account/nav-account.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/main/home/home.component';
import { PricingComponent } from './pages/main/pricing/pricing.component';
import { FeaturesComponent } from './pages/main/features/features.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { TermsComponent } from './pages/legal/terms/terms.component';
import { NotFoundComponent } from '../landing/pages/not-found/not-found.component';

import { ForgotComponent } from './pages/authentication/forgot/forgot.component';
import { SigninComponent } from './pages/authentication/signin/signin.component';

import { SignupComponent } from './pages/authentication/signup/signup.component';
import { PersonalComponent } from './pages/authentication/signup/personal/personal.component';
import { AccountComponent } from './pages/authentication/signup/account/account.component';
import { AboutComponent } from './pages/authentication/signup/about/about.component';
import { SubscriptionComponent } from './pages/authentication/signup/subscription/subscription.component';
import { AppearanceComponent } from './pages/authentication/signup/appearance/appearance.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [
    NavigationComponent,
    NavLinksComponent,
    NavAccountComponent,

    HeaderComponent,
    FooterComponent,

    LandingComponent,
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    PrivacyComponent,
    TermsComponent,
    NotFoundComponent,

    ForgotComponent,
    SigninComponent,
    SignupComponent,
    PersonalComponent,
    AccountComponent,
    AboutComponent,
    AppearanceComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SignupMainComponent } from './signup-main/signup-main.component';
import { SignupProfileComponent } from './signup-profile/signup-profile.component';
import { SignupAboutComponent } from './signup-about/signup-about.component';
import { SignupAppearanceComponent } from './signup-appearance/signup-appearance.component';
import { SignupPremiumComponent } from './signup-premium/signup-premium.component';

@NgModule({
  declarations: [
    SignupMainComponent,
    SignupProfileComponent,
    SignupAboutComponent,
    SignupAppearanceComponent,
    SignupPremiumComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SignupModule { }

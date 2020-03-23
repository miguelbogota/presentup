import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AnimationsModule } from 'src/app/core/animations/animations.module';

// Components
import { HandlerErrorComponent } from './handlers/handler-error/handler-error.component';
import { HandlerUserComponent } from './handlers/handler-user/handler-user.component';
import { HandlerCropperComponent } from './handlers/handler-cropper/handler-cropper.component';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    HandlerCropperComponent,
    HandlerErrorComponent,
    HandlerUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    PageModule,
    AnimationsModule
  ],
  exports: [
    HandlerCropperComponent,
    HandlerErrorComponent,
    HandlerUserComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AnimationsModule } from 'src/app/core/animations/animations.module';

// Components
import { HandlerNotFoundComponent } from './handlers/handler-not-found/handler-not-found.component';
import { HandlerUserDesignComponent } from './handlers/handler-user-design/handler-user-design.component';
import { HandlerCropperComponent } from './handlers/handler-cropper/handler-cropper.component';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    HandlerCropperComponent,
    HandlerNotFoundComponent,
    HandlerUserDesignComponent
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
    HandlerNotFoundComponent,
    HandlerUserDesignComponent
  ]
})
export class SharedModule { }

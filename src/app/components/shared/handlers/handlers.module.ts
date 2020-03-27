import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { AnimationsModule } from 'src/app/core/animations/animations.module';
import { ControlsModule } from '../controls/controls.module';

// Components
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDesignComponent } from './user-design/user-design.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    UserDesignComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AnimationsModule,
    ControlsModule
  ],
  exports: [
    NotFoundComponent,
    UserDesignComponent
  ]
})
export class HandlersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { AuthService } from '@app-core/services/auth/auth.service';
import { UserService } from '@app-core/services/user/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class CoreModule { }

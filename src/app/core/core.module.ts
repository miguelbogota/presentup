import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { NotificationService } from '@app-core/services/notification/notification.service';
import { UserService } from '@app-core/services/user/user.service';
import { AuthService } from '@app-core/authentication/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NotificationService,
    UserService,
    AuthService
  ]
})
export class CoreModule { }

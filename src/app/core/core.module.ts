import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { NotificationService } from '@app-core/services/notification/notification.service';
import { UserService } from '@app-core/http/user/user.service';
import { AuthService } from '@app-core/authentication/auth.service';
import { ApiService } from '@app-core/http/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NotificationService,
    ApiService,
    UserService,
    AuthService
  ]
})
export class CoreModule { }

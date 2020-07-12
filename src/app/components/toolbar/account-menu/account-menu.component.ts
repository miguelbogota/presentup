import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-core/services/auth/auth.service';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  public notifications = [];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}

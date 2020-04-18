import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.scss']
})
export class NavAccountComponent implements OnInit {

  @Input() user: IUser; // Property to store the user currently logged
  @Input() menuState: boolean; // Property for the state of the menu
  @Output() menuChanged: EventEmitter<string> = new EventEmitter<string>(); // Sends the actual state of the menu

  // Default image if user is not logged
  defaultImgUrl = 'https://cdn.clipart.email/1020ed863fac31edad415031dcb0eb65_mimmic-fashion-jewelry-rings-necklaces-bracelets-earrings_512-512.png';

  constructor() { }

  ngOnInit(): void {
  }

  // Function send an event to parent when the menu is toggle
  toggleAction() {
    this.menuChanged.emit('account');
  }

}

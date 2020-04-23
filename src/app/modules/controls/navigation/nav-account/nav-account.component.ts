import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.scss']
})
export class NavAccountComponent implements OnInit {

  @Input() user: IUser; // Property to store the user currently logged
  @Input() menuState: boolean; // Property for the state of the menu
  @Output() sendSignOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Default image if user is not logged
  defaultImgUrl = 'https://cdn.clipart.email/1020ed863fac31edad415031dcb0eb65_mimmic-fashion-jewelry-rings-necklaces-bracelets-earrings_512-512.png';

  // Listener checking if the user clicks outside component to close the menu
  @HostListener('document:click', ['$event'])
  clickout(e: any) { if(!this.eRef.nativeElement.contains(e.target) && this.menuState) { this.menuState = false; } }

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  // Button to sign out
  signOut(): void {
    this.sendSignOut.emit(true);
  }

}

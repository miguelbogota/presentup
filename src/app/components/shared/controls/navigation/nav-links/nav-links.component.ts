import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  @Input() menuState: boolean; // Property for the state of the menu

  // Listener checking if the user clicks outside component to close the menu
  @HostListener('document:click', ['$event'])
  clickout(e) { if(!this.eRef.nativeElement.contains(e.target) && this.menuState) { this.menuState = false; } }

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

}

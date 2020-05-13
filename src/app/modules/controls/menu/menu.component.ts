import { Component, OnInit, Input, HostListener, ElementRef, HostBinding, Output, EventEmitter, ViewChild } from '@angular/core';
import { ILink } from '@app-models/link.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // Menu's properties
  menuState = false; // Property for the state of the menu if open or closed
  @Input() menuType: 'fixed' | 'pop' = 'fixed'; // Property will show the menu. Fixed in a part of the screen or as a pop up
  @Input() menuPosition: 'left' | 'right' = 'left'; // Property will show the menu in the left or right of the screen
  @Input() menuTitle: string; // Title for the menu can be enter as a property
  @Input() menuWidth = '280px'; // Width for the menu when is being shown
  @Input() menuLinks: ILink[] = []; // Routes and links to show in the side panel
  @Input() menuLinksType: 'square' | 'clean' = 'clean'; // The looks of the icons
  @Input() menuBigScreen: 'visible' | 'hidden' = 'hidden'; // In a bigger by default the menu will be hidden
  @Input() menuWorks: 'normal' | 'only-small' = 'only-small'; // If the button will be shown in the bigger screen
  @Input() buttonSize = '40px'; // The size will be a square
  @Input() buttonRoundness = '2px'; // The roundness of the button
  @Input() buttonIcon = 'fa-bars'; // Icon for the menu. This will use FontAwesome and it will be the class
  @Input() buttonIconColor = 'var(--dark)'; // Color for the icon. Defaul will be the varible dark
  @Input() buttonImage = ''; // Image for the button - Will be prioritized over the icon
  // Add style to the host for the visibility
  @HostBinding('class') classes: string;
  // Send click event to parent
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();
  @ViewChild('shadow') shadow: ElementRef;

  constructor(
    private eRef: ElementRef
  ) { }

  // Listener checking if the user clicks outside component to close the menu
  @HostListener('document:click', ['$event'])
  clickout(e: any) {
    const clickedOutside = !this.eRef.nativeElement.contains(e.target);
    const clickedShadow = this.shadow.nativeElement.contains(e.target);
    if(( clickedOutside || clickedShadow ) && this.menuState) { this.menuState = false; }
    this.lockScroll(this.menuState);

  }

  ngOnInit(): void {
    // Set the menu width to the one passed on the properties
    this.eRef.nativeElement.style.setProperty('--menu-width', this.menuWidth);
    this.eRef.nativeElement.style.setProperty('--button-size', this.buttonSize);
    this.eRef.nativeElement.style.setProperty('--roundness', this.buttonRoundness);
    this.eRef.nativeElement.style.setProperty('--parent-height', this.eRef.nativeElement.parentElement.offsetHeight + 'px');
    this.classes = this.menuBigScreen + ' ' + this.menuWorks;
  }

  // Click event for the links
  sendClickEvent(e: MouseEvent) {
    this.menuState = false;
    this.clicked.emit(e);
  }

  // Function will lock the scroll in the background
  lockScroll(lock: boolean) {
    // Get the body
    const body: HTMLElement = document.body as HTMLElement;
    // Only make changes if the menu is of type fixed
    if (this.menuType === 'fixed') {
      if (lock) { body.classList.add('modal-open'); }
      else { body.classList.remove('modal-open'); }
    }
  }

}

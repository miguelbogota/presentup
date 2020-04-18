import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  @Input() menuState: boolean; // Property for the state of the menu
  @Output() menuChanged: EventEmitter<string> = new EventEmitter<string>(); // Sends the actual state of the menu

  constructor() { }

  ngOnInit(): void {
  }

  // Function send an event to parent when the menu is toggle
  toggleAction() {
    this.menuChanged.emit('links');
  }

}

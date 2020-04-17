import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Properties for the navigation small screen to not overlap
  account = false;
  menu = false;
  imgUrl = 'https://cdn.clipart.email/1020ed863fac31edad415031dcb0eb65_mimmic-fashion-jewelry-rings-necklaces-bracelets-earrings_512-512.png';

  constructor() { }

  ngOnInit(): void {
  }

  // Function to change the menus if the other one is open
  toggleAction(nav: string) {
    if (nav === 'menu') { this.account = false; }
    else if (nav === 'account') { this.menu = false; }
    else { this.menu = false; this.account = false; }
  }

}

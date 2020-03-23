import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-navigation-basic',
  templateUrl: './navigation-basic.component.html',
  styleUrls: ['./navigation-basic.component.scss']
})
export class NavigationBasicComponent implements OnInit {

  @Input() user: IUser; // Store user to show the information needed in the component
  showAdv = false; // Property to show the content of the ad
  showSettings = true; // Property to show the settings button | changed for testing to true

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showAdv = !this.showAdv;
  }

}

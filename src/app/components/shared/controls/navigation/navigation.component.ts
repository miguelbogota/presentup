import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Properties for the navigation small screen to not overlap
  showAccountMenu = false;
  showLinksMenu = false;

  userImgUrl = 'https://firebasestorage.googleapis.com/v0/b/miguelporfolio.appspot.com/o/logo.jpeg?alt=media&token=80a3a9e0-1f5c-4f6b-a889-1633afaa719c';

  user: IUser = {
    id: '234857398478',
    email: 'miguelbogota.rico@gmail.com',
    name: 'Miguel Rico',
    uid: 'miguelbogota',
    password: '1234',
    location: 'Colombia',
    birth: new Date(),
    gender: 'Male',

    img: this.userImgUrl,
    descriptions: ['Hola'],
    settings: {
      design: 'basic',
      subscription: 'free'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  // Function to change the menus if the other one is open
  toggle(nav: string) {
    if (nav === 'links') {
      this.showLinksMenu = true;
      this.showAccountMenu = false;
    }
    else if (nav === 'account') {
      this.showLinksMenu = false;
      this.showAccountMenu = true;
    }
    else {
      this.showLinksMenu = false;
      this.showAccountMenu = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Routes and links to show in the side panel
  links: ILink[] = [
    { name: 'Cuenta', url: 'account', icon: 'fa-user' },
    { name: 'Apariencia', url: 'appearance', icon: 'fa-palette'  },
    { name: 'Estadísticas', url: 'statistics', icon: 'fa-chart-bar'  },
    { name: 'Suscripción', url: 'subscription', icon: 'fa-credit-card'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

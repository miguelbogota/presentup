import { Component, OnInit } from '@angular/core';
import { ILink } from '@app-models/link.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // Links to show in the menu
  menuLinks: ILink[] = [
    { name: 'Cuenta', url: '/settings/account', icon: 'fas fa-user' },
    { name: 'Apariencia', url: '/settings/appearance', icon: 'fas fa-palette' },
    { name: 'Estadísticas', url: '/settings/statistics', icon: 'fas fa-chart-bar' },
    { name: 'Suscripción', url: '/settings/subscription', icon: 'fas fa-credit-card' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

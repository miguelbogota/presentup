import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {

  // Routes to show in navigation
  links: ILink[] = [
    { name: 'Inicio', url: '' },
    { name: 'Privacidad', url: 'privacy' },
    { name: 'Precios', url: 'pricing'  },
    { name: 'Iniciar Sesión', url: 'signin'  },
    { name: 'Crear Cuenta', url: 'signup'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

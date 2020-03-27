import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Routes to show in navigation
  links: ILink[] = [
    { name: 'Inicio', url: '' },
    { name: 'Precio', url: 'pricing' },
    { name: 'Caracteristicas', url: 'features' },
    { name: 'Iniciar Sesión', url: 'signin'  },
    { name: 'Crear Cuenta', url: 'signup'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

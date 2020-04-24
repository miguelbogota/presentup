import { Component, OnInit, Input, HostListener, ElementRef  } from '@angular/core';
import { ILink } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() menuState: boolean; // Property for the state of the menu

  // Routes and links to show in the side panel
  links: ILink[] = [
    { name: 'Cuenta', url: 'account', icon: 'fa-user' },
    { name: 'Apariencia', url: 'appearance', icon: 'fa-palette'  },
    { name: 'Estadísticas', url: 'statistics', icon: 'fa-chart-bar'  },
    { name: 'Suscripción', url: 'subscription', icon: 'fa-credit-card'  }
  ];

  // Listener checking if the user clicks outside component to close the menu
  @HostListener('document:click', ['$event'])
  clickout(e: any) { if(!this.eRef.nativeElement.contains(e.target) && this.menuState) { this.menuState = false; } }

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

}

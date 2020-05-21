import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '@app-core/authentication/auth.service';
import { IUser } from '@app-models/user.model';
import { ILink } from '@app-models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: IUser; // Current user signed in the platform
  width: number = window.innerWidth;
  // Links to show in the menu
  links: ILink[] = [
    { displayName: 'Inicio', url: '/' },
    { displayName: 'Precios', url: '/pricing' },
    { displayName: 'Caracteristicas', url: '/features' }
  ];
  account: ILink[] = [
    { displayName: 'Iniciar sesión', url: '/signin' },
    { displayName: 'Crear cuenta', url: '/signup' }
  ];
  logged: ILink[];
  // Default image if user is not logged
  defaultImgUrl = 'https://cdn.clipart.email/1020ed863fac31edad415031dcb0eb65_mimmic-fashion-jewelry-rings-necklaces-bracelets-earrings_512-512.png';
  key = 'GlQ4vkLJFtWg8aj94lz0kfdRT7x1';

  // Add responsive
  @HostListener('window:resize', ['$event'])
  onResize(event) { this.width = window.innerWidth; }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(u => {
      // Get logged user
      this.user = u;
      // Set in here to load data stored
      this.logged = [
        { displayName: 'Ver perfil', url: '/' + (u ? u.username : '') },
        { displayName: 'Configuración', url: '/settings' },
        { displayName: 'Cerrar sesión', color: 'var(--red)', id: 'sign-out' }
      ];
    });
  }

  // Function gets the event from the clicked link and if is the sign out run the funtion
  getClickEvent(e: any) {
    const target = e.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr ? idAttr.nodeValue : null;
    if (value === 'sign-out') {
      this.signOut();
    }
  }

  // Button to sign out
  signOut(): void {
    this.authService.signOut(); // Sign it out from platform
  }

}

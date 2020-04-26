import { Component, OnInit, HostListener } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ILink } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private SESSION_CACHE = 'GlQ4vkLJFtWg8aj94lz0kfdRT7x1'; // Property id to store the user in the sessionStorage
  user: IUser; // Current user signed in the platform
  width: number = window.innerWidth;
  // Links to show in the menu
  links: ILink[] = [
    { name: 'Inicio', url: '/' },
    { name: 'Precios', url: '/pricing' },
    { name: 'Caracteristicas', url: '/features' }
  ];
  account: ILink[] = [
    { name: 'Iniciar sesión', url: '/signin' },
    { name: 'Crear cuenta', url: '/signup' }
  ];
  logged: ILink[] = [
    { name: 'Ver perfil', url: '/' + (this.getStoredUSer() ? this.getStoredUSer().username : '') },
    { name: 'Configuración', url: '/settings' },
    { name: 'Cerrar sesión', color: 'var(--red)', id: 'sign-out' }
  ];
  // Default image if user is not logged
  defaultImgUrl = 'https://cdn.clipart.email/1020ed863fac31edad415031dcb0eb65_mimmic-fashion-jewelry-rings-necklaces-bracelets-earrings_512-512.png';

  // Add responsive
  @HostListener('window:resize', ['$event'])
  onResize(event) { this.width = window.innerWidth; }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // User will be store in the sessionStorage and if is null will show a no signed template
    this.user = this.getStoredUSer();
    // Subscribe to the current user logged for changes
    this.authService.currentUser.subscribe((user: IUser) => {
      // If there's an user change update it in sessionStorage
      if (user) { this.storeUser(user); }
      // Assign user once again to display changes
      this.user = this.getStoredUSer();
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
    this.deleteStoredUser(); // Delete user from sessionStorage
  }

  // Function stores the user in the sessionStorage
  private storeUser(user: IUser): void {
    sessionStorage.setItem(this.SESSION_CACHE, JSON.stringify(user));
  }

  // Get user from the sessionStorage
  private getStoredUSer(): IUser {
    // Check if there's a user in the storage
    const theresUser = sessionStorage.getItem(this.SESSION_CACHE) != null;
    // Return user or null
    return theresUser ? JSON.parse(sessionStorage.getItem(this.SESSION_CACHE)) as IUser : null;
  }

  // Function deletes the user from the sessionStorage
  private deleteStoredUser(): void {
    sessionStorage.removeItem(this.SESSION_CACHE);
  }

}

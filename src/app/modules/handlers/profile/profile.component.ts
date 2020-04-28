import {
  Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ChangeDetectorRef, ComponentFactory, ComponentRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/http/user/user.service';
import { IUser } from 'src/app/shared/models/user.model';

// Designs
import { BasicComponent } from 'src/app/modules/designs/basic/basic.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  USER_CACHE = '9jK9uhkJ0LY0MYNfYTOTtpWsi4l2'; // Nane where the user will be stored
  username: string = null; // Property for the id of the user
  user: IUser; // Property to store the user that is being watched
  component: ComponentRef<any>; // This will be the component to be build
  showLoading = true; // Property to know if the page is loading

  // Insert the component in this container
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  // Constructor with dependency injection
  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    // Get the id from the route
    this.route.paramMap.subscribe(p => {
      this.username = p.get('username'); // Store id from the route
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.user = this.getStoredUSer(); // Store user from the local storage
    // Validate if there's any user in local
    if (this.user) {
      // Show user from localStorage
      this.buildComponent(this.user);
    }
    // Stop animation
    this.showLoading = false;
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();

    // Keep listening for changes in the server
    this.userService.getUserWithProperty('username', this.username).subscribe((user: IUser) => {
      // If there's an user change update it in localStorage
      if (user) {
        // If the user locally is diferrent from the one in the server update it
        if (JSON.stringify(user) !== JSON.stringify(this.user)) {
          // If there's already an user locally component has to be destroy to update the new changes
          if (this.user) { this.destroyComponent(); }
          this.storeUser(user); // Save user in localStorage
          this.user = this.getStoredUSer(); // Asign data from localStorage to user
          this.buildComponent(this.user); // build component with new information
        }
      }
      // If it does not exist send to error
      else { this.router.navigate(['/error'], { skipLocationChange: true }); }
      // Assign user once again to display changes
      this.user = this.getStoredUSer();
    });
  }

  // Function creates the design component
  buildComponent(user: IUser): void {
    const design = this.getDesign(user.design); // Component to show the user
    this.component = this.container.createComponent(design); // Create component
    this.component.instance.user = this.user; // Pass the params to the component
  }

  // Function destroys the component with the design
  destroyComponent(): void {
    this.component.destroy();
  }

  // Function retrieves the component with the user settings
  getDesign(design: string): ComponentFactory<any> {
    // Validate the option
    switch (design) {
      // Load basic design
      case 'basic': return this.resolver.resolveComponentFactory(BasicComponent);
      // Defaul will be basic design
      default: return this.resolver.resolveComponentFactory(BasicComponent);
    }
  }

  // Function stores the user in the localStorage
  private storeUser(user: IUser): void {
    localStorage.setItem(this.USER_CACHE, JSON.stringify(user));
  }

  // Get user from the localStorage
  private getStoredUSer(): IUser {
    // Check if there's a user in the storage
    const theresUser = localStorage.getItem(this.USER_CACHE) != null;
    // Check inf the username is the same
    const isSameUsername = theresUser ? (JSON.parse(localStorage.getItem(this.USER_CACHE)) as IUser)?.username === this.username : null;
    // Return user or null
    return theresUser && isSameUsername ? JSON.parse(localStorage.getItem(this.USER_CACHE)) as IUser : null;
  }

  // Function deletes the user from the localStorage
  private deleteStoredUser(): void {
    localStorage.removeItem(this.USER_CACHE);
  }

}

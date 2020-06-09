import {
  Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ChangeDetectorRef, ComponentFactory, ComponentRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageLS, IStorageSLConfig } from '@app-core/classes/storage/storagels';
import { UserService } from '@app-core/http/user/user-old.service';
import { IUser } from '@app-models/user.model';

// Designs
import { BasicComponent } from 'src/app/modules/designs/basic/basic.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  username: string = null; // Property for the id of the user
  user: IUser; // Property to store the user that is being watched
  component: ComponentRef<any>; // This will be the component to be build
  showLoading = true; // Property to know if the page is loading
  // Storage configuration and service
  s: IStorageSLConfig = { key: '9jK9uhkJ0LY0MYNfYTOTtpWsi4l2', type: 'local' };
  private storage = new StorageLS(this.s);

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
    /**
     * Will it keep listening for changes in the storage since every time the
     * user updates the information will be updated in there. After it will load
     * the information in the component.
     */
    this.storage.watch.subscribe(u => {
      this.user = u; // Store user from the local storage
      // Validate if there's any user in local
      if (this.user && this.user.username === this.username) {
        // Show user from localStorage
        this.buildComponent(this.user);
        // Finish the loading
        this.loadDone();
        // Keep listening for changes
        this.getChanges();
      }
      // Load the username if is not saved nor de same
      else {
        // Load changes
        this.getChanges();
      }
    });

  }

  /**
   * Function retrieves the component with the user settings.
   * @param design String with the name of the design to load
   */
  private getDesign(design: string): ComponentFactory<any> {
    // Validate the option
    switch (design) {
      // Load basic design
      case 'basic': return this.resolver.resolveComponentFactory(BasicComponent);
      // Defaul will be basic design
      default: return this.resolver.resolveComponentFactory(BasicComponent);
    }
  }

  /**
   * Function creates the design component.
   * @param user User to be loaded in the component.
   */
  private buildComponent(user: IUser): void {
    const design = this.getDesign(user.design); // Component to show the user
    this.component = this.container.createComponent(design); // Create component
    this.component.instance.user = this.user; // Pass the params to the component
  }

  /**
   * Function destroys the component with the design if the component
   * was already loaded.
   */
  private destroyComponent(): void {
    if (this.component) { this.component.destroy(); }
  }

  /**
   * Function stops the animation and detect the changes.
   */
  private loadDone() {
    // Stop animation
    this.showLoading = false;
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

  /**
   * This funtion listen for changes in the db and updates it to the
   * new value in the storage.
   */
  private getChanges(): void {
    // Keep listening for changes in the server
    this.userService.getUserWithProperty('username', this.username).subscribe((user: IUser) => {
      // If there's an user change update it in localStorage
      if (user) {
        // If the user locally is diferrent from the one in the server update it
        if (JSON.stringify(user) !== JSON.stringify(this.user)) {
          // If the data is not the same and the component was already loaded it has to be destroyed
          if (this.user) { this.destroyComponent(); }
          // Save user in localStorage
          this.storage.set(user);
        }
      }
      // If it does not exist send to error
      else { this.router.navigate(['/error'], { skipLocationChange: true }); }
    });
  }

}

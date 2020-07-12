import {
  Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ViewContainerRef,
  ComponentRef, ComponentFactoryResolver, ChangeDetectorRef, ComponentFactory
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ProfileState } from './_profile.state';
import { SetProfile } from './_profile.actions';
import { UserService } from '@app-core/services/user/user.service';
import { User } from '@app-models/user.model';
// Designs
import { BasicComponent } from '@app-designs/basic/basic.component';
import { PremiumComponent } from '@app-designs/premium/premium.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

  public isLoading = true; // Property to know if the page is loading
  private component: ComponentRef<any>; // This will be the component to be build

  private username: string = null; // Property for the username in the URL
  user: User; // Property to store the current user from the URL

  private userWatchServer: Subscription;
  private userWatchLocal: Subscription;

  // User passed from the profile state
  @Select(ProfileState)
  profileState: Observable<User>;

  // Insert the component in this container
  @ViewChild('profile', { read: ViewContainerRef })
  private profile: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private store: Store
  ) {
    // Get the id from the route
    this.route.paramMap.subscribe(p => {
      this.username = p.get('username'); // Store id from the route
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroy
    this.userWatchServer.unsubscribe();
    this.userWatchLocal.unsubscribe();
  }

  ngAfterViewInit(): void {
    /**
     * Will it keep listening for changes in the state since every time the
     * user updates the information will be updated in there. After it will load
     * the information in the component.
     */
    this.userWatchLocal = this.profileState.subscribe((user: User) => {
      this.user = user; // Store user from the state
      // Validate if there's any user in state
      if (this.user && this.user.username === this.username) {
        // Show user from state
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
      // Load basic design
      case 'premium': return this.resolver.resolveComponentFactory(PremiumComponent);
      // Defaul will be basic design
      default: return this.resolver.resolveComponentFactory(BasicComponent);
    }
  }

  /**
   * Function creates the design component.
   * @param user User to be loaded in the component.
   */
  private buildComponent(user: User): void {
    const design = this.getDesign(user.design); // Component to show the user
    this.component = this.profile.createComponent(design); // Create component
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
    this.isLoading = false;
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

  /**
   * This funtion listen for changes in the db and updates it to the
   * new value in the storage.
   */
  private getChanges(): void {
    this.userWatchServer = this.userService.watchUserWith('username', '==', this.username)
      .subscribe((user: User) => {
        // If there's an user change update it the state
        if (user) {
          // If the user in state is diferrent from the one in the server update it
          if (JSON.stringify(user) !== JSON.stringify(this.user)) {
            // If the data is not the same and the component was already loaded it has to be destroyed
            if (this.user) { this.destroyComponent(); }
            // Save user in state
            this.storeState(user);
          }
        }
        // If it does not exist send to error
        else { this.router.navigate(['/error'], { skipLocationChange: true }); }
      });
  }

  /**
   * Function will store in the state the user pass.
   * @param user User to store in the state.
   */
  private storeState(user: User): void {
    // Dispatch action to store the profile
    this.store.dispatch([
      new SetProfile(user)
    ]);
  }

}

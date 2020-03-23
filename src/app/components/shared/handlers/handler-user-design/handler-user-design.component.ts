import {
  Component, OnInit, AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/models/user.model';

// Designs
import { BasicComponent } from '../../../designs/basic/basic.component';

@Component({
  selector: 'app-handler-user-design',
  templateUrl: './handler-user-design.component.html',
  styleUrls: ['./handler-user-design.component.scss']
})
export class HandlerUserDesignComponent implements OnInit, AfterViewInit {

  uid: string = null; // Property for the id of the user
  showLoading = true; // Property to know if the page is loading
  CACHE_KEY = 'userLoaded'; // Nane where the user will be stored

  // Insert the component in this container
  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

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
      this.uid = p.get('id'); // Store id from the route
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Validate if there's any user in local
    if (localStorage[this.CACHE_KEY] != null) {
      // Validate is the same user than the url
      if (JSON.parse(localStorage[this.CACHE_KEY]).uid === this.uid) {
        // Show cuser from local
        this.buildComponent(JSON.parse(localStorage[this.CACHE_KEY]) as IUser);
      }
      // If user is other one search in db
      else { this.storeUser(); }
    }
    // If there's no user search in db
    else { this.storeUser(); }
    // Stop animation
    this.showLoading = false;
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

  // Function creates the design component
  buildComponent(user: IUser): void {
    const factory = this.getDesign(user.settings.design); // Component to show the user
    const componentRef = this.content.createComponent(factory); // Create component
    componentRef.instance.user = user; // Pass the params to the component
  }

  // Function refresh the user stored
  storeUser(): void {
    // Get the user from the route uid
    this.userService.getUser(this.uid).subscribe((user: IUser) => {
      // Validate if user exist
      if (user) {
        // Store currect user waching
        localStorage[this.CACHE_KEY] = JSON.stringify(user);
        // Build component into the view
        this.buildComponent(JSON.parse(localStorage[this.CACHE_KEY]) as IUser);
      }
      // If it does not exist send to error
      else { this.router.navigate(['/error'], { skipLocationChange: true });  }
    });
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

}

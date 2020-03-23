import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

// Designs
import { BasicComponent } from '../../../designs/basic/basic.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-handler-user',
  templateUrl: './handler-user.component.html',
  styleUrls: ['./handler-user.component.scss']
})
export class HandlerUserComponent implements OnInit {

  uid: string = null; // Property for the id of the user
  user: IUser; // User in the url
  showLoading = true; // Property to know if the page is loading

  // Insert the component in this container
  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  // Constructor with dependency injection
  constructor(
    private resolver: ComponentFactoryResolver,
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
    // Get the user from the route uid
    this.userService.getUser(this.uid).subscribe((user: IUser) => {
      // Validate if user exist
      if (user) {
        this.user = user; // Store the user
        // Load design choosen by the user
        const factory = this.getDesign(this.user.settings.design); // Component to show the user
        // Stop animation
        this.showLoading = false;
        // Load component if is not loading
        if (!this.showLoading) {
          const componentRef = this.content.createComponent(factory);
          componentRef.instance.user = this.user;
        }
      }
      // If it does not exist send to error
      else {
        this.router.navigate(['/error'], { skipLocationChange: true });
      }
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

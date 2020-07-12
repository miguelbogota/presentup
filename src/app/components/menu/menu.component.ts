import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  @Input() buttonIcon: string; // Button icon
  private routerSub: Subscription;

  isShown = false;

  constructor(
    private router: Router
  ) {
    // Close menu when the route is change
    this.routerSub = router.events.subscribe(val => {
      this.isShown = false;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  /**
   * Trigger menu on button click.
   */
  public toggleMenu(): void {
    this.isShown = !this.isShown;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app-models/user.model';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  // Store user to show it in all of the components for this design
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}

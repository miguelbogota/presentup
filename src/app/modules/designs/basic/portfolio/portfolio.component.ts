import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // Store user to show the information needed in the component
  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}

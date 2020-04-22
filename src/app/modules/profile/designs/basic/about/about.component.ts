import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // Store user to show the information needed in the component
  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../../core/models/user.model';

@Component({
  selector: 'app-about-basic',
  templateUrl: './about-basic.component.html',
  styleUrls: ['./about-basic.component.scss']
})
export class AboutBasicComponent implements OnInit {

  // Store user to show the information needed in the component
  @Input() user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}

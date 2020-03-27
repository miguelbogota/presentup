import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // This property it takes the image's url to show
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}

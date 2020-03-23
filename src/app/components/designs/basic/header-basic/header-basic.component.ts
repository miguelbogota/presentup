import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-basic',
  templateUrl: './header-basic.component.html',
  styleUrls: ['./header-basic.component.scss']
})
export class HeaderBasicComponent implements OnInit {

  // This property it takes the image's url to show
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}

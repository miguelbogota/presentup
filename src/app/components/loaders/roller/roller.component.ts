import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.scss']
})
export class RollerComponent implements OnInit {

  @Input() color = 'var(--dark)'; // Color for the component
  @Input() size = '80px'; // Size of the component

  constructor() { }

  ngOnInit(): void {
  }
}

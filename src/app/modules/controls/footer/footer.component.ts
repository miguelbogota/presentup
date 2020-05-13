import { Component, OnInit } from '@angular/core';
import { ILink } from '@app-models/link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Routes to show in the footer
  links: ILink[] = [
    { name: 'Privacidad', url: 'legal/privacy' },
    { name: 'Legal', url: 'legal/terms'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

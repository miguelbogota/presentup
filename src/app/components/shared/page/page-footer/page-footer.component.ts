import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  // Routes to show in the footer
  links: ILink[] = [
    { name: 'Privacidad', url: 'privacy' },
    { name: 'Precios', url: 'pricing'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

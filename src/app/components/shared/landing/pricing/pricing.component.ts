import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private ns: NotificationService) { }

  ngOnInit(): void {
  }

  sendNot() {
    this.ns.createNotification('Hola');
  }

}

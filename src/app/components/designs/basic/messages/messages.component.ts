import { Component, OnInit } from '@angular/core';
import { IChat } from 'src/app/core/models/chat.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  chatPreview: IChat[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

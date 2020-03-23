import { Component, OnInit } from '@angular/core';
import { IChat } from 'src/app/core/models/chat.model';

@Component({
  selector: 'app-messages-basic',
  templateUrl: './messages-basic.component.html',
  styleUrls: ['./messages-basic.component.scss']
})
export class MessagesBasicComponent implements OnInit {

  chatPreview: IChat[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

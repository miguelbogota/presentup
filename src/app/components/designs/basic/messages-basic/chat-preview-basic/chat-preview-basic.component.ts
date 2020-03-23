import { Component, OnInit, Input } from '@angular/core';
import { IChat } from 'src/app/core/models/chat.model';

@Component({
  selector: 'app-chat-preview-basic',
  templateUrl: './chat-preview-basic.component.html',
  styleUrls: ['./chat-preview-basic.component.scss']
})
export class ChatPreviewBasicComponent implements OnInit {

  @Input() chat: IChat; // Chat to be shown in the preview

  constructor() { }

  ngOnInit(): void {
  }

}

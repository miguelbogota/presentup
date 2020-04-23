import { Component, OnInit, Input } from '@angular/core';
import { IChat } from 'src/app/shared/models/chat.model';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat: IChat; // Chat to be shown in the preview

  constructor() { }

  ngOnInit(): void {
  }

}

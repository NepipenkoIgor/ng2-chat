import {Component, Input} from '@angular/core';
import {Message} from '../../shared/interfaces/message';
@Component({
  selector: 'ng2chat-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input()
  message: Message;
}

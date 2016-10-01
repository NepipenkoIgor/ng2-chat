import {Component, OnInit} from '@angular/core';
import {Message} from '../shared/interfaces/message';
@Component({
  selector: 'ng2chat-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  message: Message;

  ngOnInit() {
    this.message = {
      owner: {
        avatar: 'https://randomuser.me/api/portraits/thumb/women/46.jpg',
        firstName: 'Igor',
        lastName: 'Nepipenko',
        status: 'online'
      },
      text: 'Привет всем',
      date:  Date.now()
    };
  };

}

import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../shared/services/messages.service';
import {Message} from '../shared/interfaces/message';

@Component({
  selector: 'ng2chat-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  private _messagesService: MessagesService;

  public messages: Message[];

  constructor(_messagesService: MessagesService) {
    this._messagesService = _messagesService;
    this._messagesService.getMessageStream().subscribe((messages) => {
      this.messages = messages;
    });

  }


  public ngOnInit(): void {

  }

}

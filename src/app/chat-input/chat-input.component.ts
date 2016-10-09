import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../shared/services/messages.service';
@Component({
  selector: 'ng2chat-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  private _messagesService: MessagesService;

  constructor(_messagesService: MessagesService) {
    this._messagesService = _messagesService;
  }

  ngOnInit() {
  }


  public sendMessage(message: string): void {
    this._messagesService.sendMessage(message);
  }
}

import {Component, OnInit} from '@angular/core';
import {Message} from '../shared/interfaces/message';
let faker = require('faker');

@Component({
  selector: 'ng2chat-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  public messages: Message[];

  public ngOnInit(): void {
    this.messages = Array(10).fill('').map(message => this._getRandomMessages());
  }

  private _getRandomMessages(): Message {
    return {
      owner: {
        avatar: faker.image.avatar(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        availability: 'online'
      },
      text: faker.lorem.sentence(),
      date: Date.now()
    };
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng2chat-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  public sendMessage(message: string): void {
    console.log(message);
  }
}

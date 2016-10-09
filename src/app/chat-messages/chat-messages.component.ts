import {Component, OnInit, OnDestroy} from '@angular/core';
import {MessagesService} from '../shared/services/messages.service';
import {Message} from '../shared/interfaces/message';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ng2chat-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  private _messagesService: MessagesService;

  public messages: Message[];

  private messageSubscription: Subscription;
  private _routerSubscription: Subscription;
  private _route: ActivatedRoute;

  constructor(_messagesService: MessagesService,
              _route: ActivatedRoute) {
    this._route = _route;
    this._messagesService = _messagesService;

    this._routerSubscription = this._route.params.subscribe((params: any) => {
      if (this.messageSubscription) {
        this.messageSubscription.unsubscribe();
      }
      this.messageSubscription = this._messagesService.getMessageStream(params.userId).subscribe((messages) => {
        this.messages = messages;
      });
    });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
    this._routerSubscription.unsubscribe();
  }

  public ngOnInit(): void {

  }

}

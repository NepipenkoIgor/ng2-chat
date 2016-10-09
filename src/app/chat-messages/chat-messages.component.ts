import {Component, OnInit, ElementRef, OnDestroy, AfterContentChecked} from '@angular/core';
import {MessagesService} from '../shared/services/messages.service';
import {Message} from '../shared/interfaces/message';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ng2chat-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit, OnDestroy, AfterContentChecked {

  private _messagesService: MessagesService;

  public messages: Message[];

  private messageSubscription: Subscription;
  private _routerSubscription: Subscription;
  private _route: ActivatedRoute;

  private _element: ElementRef;

  private _chatHeight: number;

  constructor(_messagesService: MessagesService,
              _route: ActivatedRoute,
              _element: ElementRef) {
    this._route = _route;
    this._element = _element;
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

  ngAfterContentChecked() {
    let height = this._element.nativeElement.querySelector('.decor-default').scrollHeight;
    if (this._chatHeight === height) {
      return;
    }
    this._chatHeight = height;
    this._element.nativeElement.querySelector('.decor-default').scrollTop = height;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
    this._routerSubscription.unsubscribe();
  }

  public ngOnInit(): void {

  }

}

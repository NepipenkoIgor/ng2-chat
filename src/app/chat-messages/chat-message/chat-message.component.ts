import {Component, Input} from '@angular/core';
import {Message} from '../../shared/interfaces/message';
/** move user to user service*/
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {User} from '../../shared/interfaces/user';

@Component({
  selector: 'ng2chat-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input()
  public message: Message;

  public user: User;

  private _authGuardService: AuthGuardService;

  constructor(_authGuardService: AuthGuardService) {
    this._authGuardService = _authGuardService;
    this.user = this._authGuardService.getCurrentUser();
  }
}

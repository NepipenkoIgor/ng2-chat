import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
// seem like user service ????
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable()
export class MessagesService {

  private _angularFire: AngularFire;
  private _authGuardService: AuthGuardService;
  private _userService: UserService;
  private userId: string;

  constructor(_angularFire: AngularFire,
              _authGuardService: AuthGuardService,
              _userService: UserService) {
    this._angularFire = _angularFire;
    this._authGuardService = _authGuardService;
    this._userService = _userService;
  }

  public  getMessageStream(userId): Observable<any> {
    this.userId = userId;
    return Observable.combineLatest(this._angularFire.database.list('messages'), this._userService.getUsers(),
      (messages, users) =>
        messages.filter(message =>
        message.room === this._userService.createRoomName(userId, this._authGuardService.getCurrentUser().user_id.split('|')[1]))
          .map(message => {
            message.owner = users.filter(user => user.user_id === message.owner.user_id)[0];
            return message;
          }));
  }

  public sendMessage(message: string): void {
    this._angularFire.database.list('messages').push({
      date: Date.now(),
      text: message,
      room: this._userService.createRoomName(this.userId, this._authGuardService.getCurrentUser().user_id.split('|')[1]),
      owner: {name: this._authGuardService.getCurrentUser().name, user_id: this._authGuardService.getCurrentUser().user_id}
    });
  }

}

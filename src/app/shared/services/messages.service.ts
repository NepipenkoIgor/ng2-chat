import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Message} from '../interfaces/message';
// seem like user service ????
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable()
export class MessagesService {

  private _angularFire: AngularFire;
  private _authGuardService: AuthGuardService;
  private _userService: UserService;

  constructor(_angularFire: AngularFire,
              _authGuardService: AuthGuardService,
              _userService: UserService) {
    this._angularFire = _angularFire;
    this._authGuardService = _authGuardService;
    this._userService = _userService;
  }

  public  getMessageStream(): Observable<any> {
    return Observable.combineLatest(this._angularFire.database.list('messages'), this._userService.getUsers(),
      (messages, users) =>
        messages.map(message => {
          message.owner = users.filter(user => user.user_id === message.owner.user_id)[0];
          return message;
        }));
  }

  public sendMessage(message: string): void {
    this._angularFire.database.list('messages').push({
      date: Date.now(),
      text: message,
      token: 'all',
      owner: {name: this._authGuardService.getCurrentUser().name, user_id: this._authGuardService.getCurrentUser().user_id}
    });
  }

}

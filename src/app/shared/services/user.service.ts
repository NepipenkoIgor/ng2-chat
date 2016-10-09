import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class UserService {

  private _angularFire: AngularFire;


  constructor(_angularFire: AngularFire) {
    this._angularFire = _angularFire;
  }

  public  getUsers(): FirebaseListObservable<User[]> {
    return this._angularFire.database.list('users');
  }
}

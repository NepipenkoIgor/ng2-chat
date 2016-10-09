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

  public createRoomName(id1: string, id2: string): string {
    let intId1 = parseInt(id1, 10);
    let intId2 = parseInt(id2, 10);
    if (isNaN(intId1) || isNaN(intId2)) {
      return 'all';
    }
    return intId1 > intId2 ? `${intId2}with${intId1}` : `${intId1}with${intId2}`;

  }

  // get token(): string {
  //   return this._concatId(this._sliceUserId(this.user.user_id), this._sliceUserId(UserService._token));
  // }


}

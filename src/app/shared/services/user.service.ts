import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../environments/environment';
@Injectable()
export class UserService {

  private _http: Http;

  constructor(_http: Http) {
    this._http = _http;
  }

  public getUsers(): Observable<User[]> {
    return this._http.get(environment.userUrl).map((res: Response) => res.json().results.map(user => {
      return {
        avatarUrl: user.picture.thumbnail,
        availability: 'online',
        firstName: user.name.first,
        lastName: user.name.last,
        status: 'My mood'
      };
    }));
    // try use catch
  }
}

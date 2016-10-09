import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/first';
import {AngularFire} from 'angularfire2';
import {User} from '../interfaces/user';

declare const Auth0Lock: any;
@Injectable()
export class AuthGuardService implements CanActivate {

  private static _currentUser: User;

  private _lock = new Auth0Lock(environment.Auth0_CLIENT_ID, environment.Auth0_NAMESPACE, {});
  private _angularFire: AngularFire;


  public constructor(_angularFire: AngularFire) {
    this._angularFire = _angularFire;


    Observable.merge(
      Observable.of(localStorage.getItem('id_token')),
      Observable.create((observer: Observer<string>) =>
        this._lock.on('authenticated', (AuthResponse) => observer.next(AuthResponse.idToken))))
      .first(token => token)
      .switchMap((token: string): Observable<User> => {
        localStorage.setItem('id_token', token);
        return Observable.create((observer: Observer<User>) => {
          this._lock.getProfile(token, (error, profile) => {
            if (error) {
              return observer.error(error);
            }
            observer.next(profile);
          });
        });
      })
      .switchMap((profile: User) => {
        return this._angularFire.database.list('users', {
          query: {
            orderByChild: 'user_id',
            equalTo: profile.user_id
          }
        }).switchMap(user => {
          return Observable.create((observer: Observer<User>) => {
            if (!user.length) {
              this._angularFire.database.list('users').push(profile);
            }
            observer.next(user.length ? user[0] : profile);
          });
        });
      })
      .catch(err => {
        console.log('Catch', err);
        return Observable.of('');
      })
      .subscribe((user: User) => AuthGuardService._currentUser = user);
  }

  public getCurrentUser() {
    return AuthGuardService._currentUser;
  }

  public canActivate() {
    if (!this.authenticated()) {
      this._lock.show();
      return false;
    }
    return true;
  }

  public authenticated() {
    return tokenNotExpired();
  };

}

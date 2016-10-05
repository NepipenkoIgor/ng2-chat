import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {environment} from '../../../environments/environment';
declare const Auth0Lock: any;
@Injectable()
export class AuthGuardService implements CanActivate {

  private _lock = new Auth0Lock(environment.Auth0_CLIENT_ID, environment.Auth0_NAMESPACE, {});

  public constructor() {
    this._lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
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

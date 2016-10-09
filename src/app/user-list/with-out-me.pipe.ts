import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../shared/interfaces/user';
import {AuthGuardService} from '../shared/services/auth-guard.service';
@Pipe({
  name: 'withOutMe'
})
export class WithOutMePipe implements PipeTransform {
  private _authGuardService: AuthGuardService;

  constructor(_authGuardService: AuthGuardService) {
    this._authGuardService = _authGuardService;
  }

  public transform(users: User[]): User[] {
    return users.filter(user => user.user_id !== this._authGuardService.getCurrentUser().user_id);
  }
}

import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {User} from '../shared/interfaces/user';

@Pipe({
  name: 'userList'
})
export class UserListPipe implements PipeTransform {
  public transform(users: User[], term?: string): User[] {
    if (!term) {
      return users;
    }
    return users.filter(user => new RegExp(`${term}`, 'i').test(`${user.firstName}${user.lastName}`));
  }
}

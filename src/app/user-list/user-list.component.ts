import {
  Component,
  OnInit
} from '@angular/core';
import {User} from '../shared/interfaces/user';

let faker = require('faker');

@Component({
  selector: 'ng2chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[] = [];
  public term: string;

  public ngOnInit(): void {
    this.users = Array(20).fill('').map(user => this._getRandomUser());
  }

  private _getRandomUser(): User {
    return {
      avatarUrl: faker.image.avatar(),
      availability: 'offline',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      status: faker.lorem.sentence()
    };
  }

}

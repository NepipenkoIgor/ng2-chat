import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
let faker = require('faker');

@Injectable()
export class UserService {

  public getUsers(): User[] {
    return Array(20).fill('').map(user => this._getRandomUser());
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

import {
  Component,
  OnInit
} from '@angular/core';
import {User} from '../shared/interfaces/user';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'ng2chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[] = [];
  public term: string;

  private _userService: UserService;

  constructor(_userService: UserService) {
    this._userService = _userService;
  }

  public ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }


}

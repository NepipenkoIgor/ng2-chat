import {
  Component,
  OnInit
} from "@angular/core";
import {User} from "../shared/interfaces/user";

@Component({
  selector: 'ng2chat-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public user: User = {
    avatarUrl: 'http://bootdey.com/img/Content/avatar/avatar1.png',
    availability: 'offline',
    firstName: 'John',
    lastName: 'Doe',
    status: 'Angular 2 the best'
  };

  public constructor() {
  }

  public ngOnInit():void {
    setTimeout(() => {
      this.user.availability = 'online';
      this.user.status = 'Hi all';
    }, 3000)
  }
}

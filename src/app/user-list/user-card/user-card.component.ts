import {
  Component,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import {User} from '../../shared/interfaces/user';

@Component({
  selector: 'ng2chat-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnDestroy {


  private interval: number;

  @Input()
  public user: User;

  public ngOnInit(): void {
    this.interval = setInterval(() => {
      let position = Math.floor(Math.random() * 4);
      switch (position) {
        case 0 :
          this.user.availability = 'offline';
          break;
        case 1 :
          this.user.availability = 'off';
          break;
        case 2 :
          this.user.availability = 'online';
          break;
        case 3 :
          this.user.availability = 'busy';
          break;
      }
    }, Math.random() * 15000) as any;
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}

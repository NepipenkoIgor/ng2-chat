import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ng2chat-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent  {

  @Output()
  public startSearch: EventEmitter<any> = new EventEmitter();

}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UserCardComponent} from './user-list/user-card/user-card.component';
import {UserSearchComponent} from './user-list/user-search/user-search.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserListPipe} from './user-list/user-list.pipe';
import {UserService} from './shared/services/user.service';
import {ChatMessageComponent } from './chat-messages/chat-message/chat-message.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';

@NgModule({
  declarations: [
    UserSearchComponent,
    UserListComponent,
    UserCardComponent,
    AppComponent,
    UserListPipe,
    ChatMessageComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

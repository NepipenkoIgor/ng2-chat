import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
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
import { DateTimePipe } from './chat-messages/chat-message/date-time.pipe';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';

const routes = [
  {path: '', component: ChatMessagesComponent},
  {path: 'user/:userId', component: PrivateChatComponent}
];

@NgModule({
  declarations: [
    UserSearchComponent,
    UserListComponent,
    UserCardComponent,
    AppComponent,
    UserListPipe,
    ChatMessageComponent,
    ChatMessagesComponent,
    DateTimePipe,
    ChatInputComponent,
    PrivateChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

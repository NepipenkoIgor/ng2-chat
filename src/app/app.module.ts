import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UserCardComponent} from './user-list/user-card/user-card.component';
import {UserSearchComponent} from './user-list/user-search/user-search.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserListPipe} from './user-list/user-list.pipe';
import {UserService} from './shared/services/user.service';
import {ChatMessageComponent} from './chat-messages/chat-message/chat-message.component';
import {ChatMessagesComponent} from './chat-messages/chat-messages.component';
import {DateTimePipe} from './chat-messages/chat-message/date-time.pipe';
import {ChatInputComponent} from './chat-input/chat-input.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {ChatComponent} from './chat/chat.component';
import {MessagesService} from './shared/services/messages.service';
import {AngularFireModule} from 'angularfire2';

const routes = [
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthGuardService],
    children: [
      {path: '', component: ChatMessagesComponent},
      {path: 'user/:userId', component: ChatMessagesComponent},
    ]
  },
  {
    path: '**', redirectTo: 'chat'
  }
];

const firebaseConfig = {
  apiKey: 'AIzaSyAvxVwrF-YN0TKT-Gt_Scrw7ozyUVrNerc',
  authDomain: 'users-da7e9.firebaseapp.com',
  databaseURL: 'https://users-da7e9.firebaseio.com',
  storageBucket: 'users-da7e9.appspot.com',
};


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
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, MessagesService, AuthGuardService, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}

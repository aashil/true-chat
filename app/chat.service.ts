import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Chat } from './chat';

@Injectable()
export class ChatService {

  private chatsUrl = 'localhost:8080';  // URL to web api

  constructor(private http: Http) { }

  getChats(): Promise<Chat[]> {
    return this.http.get(this.chatsUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  // delete existing chat
  delete(chat: Chat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.chatsUrl}/${chat.id}`;

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  // Add new Chat
  private post(chat: Chat): Promise<Chat> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.chatsUrl, JSON.stringify(chat), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

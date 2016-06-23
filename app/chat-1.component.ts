import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated';
import { Chat } from './chat';
import { ChatService } from './chat.service';

@Component({

	selector: 'chat-1',
	templateUrl: 'app/chat-1.component.html',

})

export class Chat1Component implements OnInit { 

  chats: Chat[];
  error: any;
  constructor(
	private router: Router,
	private chatService: ChatService) { }

	getChats() {
	this.chatService
		.getChats()
		.then(chats => this.chats = chats)
		.catch(error => this.error = error); // TODO: Display error message
	}
  
   ngOnInit() {
    this.getChats();
  }

}
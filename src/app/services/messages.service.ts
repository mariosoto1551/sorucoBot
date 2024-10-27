import { Injectable, signal } from '@angular/core';
import { Message, MessageType } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  messageList = signal<Message[]>([]);
  addMessage(message: Message){
    this.messageList.update((prev)=>[...prev, message]);
    console.log(this.messageList());
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatBoxComponent } from '../../components/chatBox/chatBox.component';
import { MyMessageBubbleComponent } from '../../components/MyMessageBubble/MyMessageBubble.component';
import { InputBoxComponent } from '../../components/inputBox/inputBox.component';
import { MessagesService } from '../../../services/messages.service';
import { Message } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-soruco-bot-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatBoxComponent,
    MyMessageBubbleComponent,
    InputBoxComponent
  ],
  templateUrl: './sorucoBotPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SorucoBotPageComponent {
  constructor(private messagesService: MessagesService) {};
  sendMessage(message: Message):void{
    this.messagesService.addMessage(message);
    
  }
}

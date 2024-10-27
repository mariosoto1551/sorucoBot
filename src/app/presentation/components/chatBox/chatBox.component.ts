import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MyMessageBubbleComponent } from '../MyMessageBubble/MyMessageBubble.component';
import { MessagesService } from '../../../services/messages.service';
import { HisMessageBubbleComponent } from '../HisMessageBubble/HisMessageBubble.component';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    CommonModule,
    MyMessageBubbleComponent,
    HisMessageBubbleComponent
  ],
  templateUrl: './chatBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBoxComponent {
  constructor(private messagesService: MessagesService) {}
  messageList = computed(()=>[...this.messagesService.messageList()]);
}

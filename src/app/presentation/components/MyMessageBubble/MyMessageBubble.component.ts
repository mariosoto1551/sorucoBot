import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message, } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-my-message-bubble',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './MyMessageBubble.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMessageBubbleComponent {
  @Input({required: true})message!: Message;
  messageClass: string[] = []

 }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message, } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-his-message-bubble',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './HisMessageBubble.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HisMessageBubbleComponent {
  @Input({required: true})message!: Message;
  messageClass: string[] = []

 }

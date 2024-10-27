import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message, MessageType } from '../../../interfaces/message.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inputBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputBoxComponent {
  @ViewChild('myInput')myInput!: ElementRef;
  @Output() onSendMessage = new EventEmitter();
  sendMessage(event: Event){
    event.preventDefault();
    if(!this.myInput.nativeElement.value)return;
    this.onSendMessage.emit({messageType: MessageType.MyMessage, text: this.myInput.nativeElement.value} as Message);
    this.myInput.nativeElement.value='';
  }
}

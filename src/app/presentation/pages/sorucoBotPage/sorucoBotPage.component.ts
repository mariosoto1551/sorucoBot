import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-soruco-bot-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sorucoBotPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SorucoBotPageComponent { }

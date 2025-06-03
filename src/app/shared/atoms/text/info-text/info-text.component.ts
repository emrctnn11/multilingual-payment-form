import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'atom-info-text',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div
      class="flex items-center justify-between text-sm font-medium text-gray-700"
    >
      <span>{{ label | translate }}</span>
      <span class="text-gray-400 text-sm font-semibold">{{
        value | translate
      }}</span>
    </div>
  `,
})
export class InfoTextComponent {
  @Input() label = '';
  @Input() value = '';
}

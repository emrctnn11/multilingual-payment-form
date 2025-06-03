import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'atom-form-label',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  template: `
    @if(text(); as text) {

    <label class="block text-sm font-medium text-gray-700">
      {{ text | translate }}
    </label>
    }
  `,
})
export class FormLabelComponent {
  text = input<string | undefined>('');
}

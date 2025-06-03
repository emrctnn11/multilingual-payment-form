import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from '../../atoms/label/form-label/form-label.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'molecule-labeled-date-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormLabelComponent, TranslateModule],
  template: `
    <div class="space-y-1">
      @if(label(); as labelKey) {
        <atom-form-label [text]="labelKey" />
      }
      <input
        type="date"
        [formControl]="control()"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  `,
})
export class LabeledDateInputComponent {
  label = input<string | undefined>();
  control = input<FormControl>(new FormControl());
}
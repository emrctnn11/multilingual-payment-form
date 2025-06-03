import { Component, input, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from '../../atoms/label/form-label/form-label.component';

@Component({
  selector: 'molecule-labeled-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, FormLabelComponent],
  template: `
    <div class="space-y-1">
      @if(label(); as label) {
      <atom-form-label [text]="label" />
      }
      <textarea
        [formControl]="control()"
        [placeholder]="placeholder()"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        rows="4"
      ></textarea>
    </div>
  `,
})
export class LabeledTextareaComponent {
  label = input<string | undefined>();
  placeholder = input<string>('Enter text here...');
  control = input<FormControl>(new FormControl());
}

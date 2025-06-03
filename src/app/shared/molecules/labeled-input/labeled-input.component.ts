// src/app/shared/molecules/labeled-input/labeled-input.component.ts
import { Component, input, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from '../../atoms/label/form-label/form-label.component';
import { FormInputComponent } from '../../atoms/input/form-input/form-input.component';

@Component({
  selector: 'molecule-labeled-input',
  standalone: true,
  imports: [FormLabelComponent, FormInputComponent, ReactiveFormsModule],
  template: `
    <div class="space-y-1">
      @if(label(); as label) {

      <atom-form-label [text]="label"></atom-form-label>
      }
      <atom-form-input
        [type]="type()"
        [placeholder]="placeholder()"
        [formControl]="control()!"
      ></atom-form-input>
    </div>
  `,
})
export class LabeledInputComponent {
  label = input<string | undefined>();
  type = input<string>('text');
  placeholder = input<string>('');
  control = input<FormControl | null>(null);
}

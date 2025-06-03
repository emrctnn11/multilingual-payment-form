import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from '../../atoms/label/form-label/form-label.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'molecule-select-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormLabelComponent,
    TranslateModule,
  ],
  template: `
    <div class="space-y-1">
      @if(label(); as label) {
      <atom-form-label [text]="label" />
      }

      <select
        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        [formControl]="control()"
        (change)="selectionChange.emit(control().value)"
      >
        <option *ngIf="placeholder" value="" disabled selected hidden>
          {{ placeholder() | translate }}
        </option>
        <option *ngFor="let option of options()" [value]="option.value">
          {{ option.label | translate }}
        </option>
      </select>
    </div>
  `,
})
export class SelectInputComponent {
  label = input<string | undefined>();
  placeholder = input<string>('Select an option');
  options = input<{ label: string; value: any }[]>([]);
  control = input<FormControl>(new FormControl());

  @Output() selectionChange = new EventEmitter<any>();
}

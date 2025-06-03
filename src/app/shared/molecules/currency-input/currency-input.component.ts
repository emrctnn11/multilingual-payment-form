import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormLabelComponent } from '../../atoms/label/form-label/form-label.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'molecule-currency-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormLabelComponent, TranslateModule],
  template: `
    <div class="space-y-1">
      @if(label(); as labelKey) {
        <atom-form-label [text]="labelKey" />
      }

      <div class="relative rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm">
            {{ currencySymbol() ? currencySymbol() : '$ ' }}
          </span>
        </div>

        <input
          type="number"
          inputmode="decimal"
          class="block w-full rounded-md border border-gray-300 pl-10 pr-12 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
          [placeholder]="placeHolder() | translate"
          [formControl]="control()"
        />
      </div>
    </div>
  `,
})
export class CurrencyInputComponent {
  label = input<string | undefined>();
  placeHolder = input<string>('0.00');
  currencySymbol = input<string>('$');
  control = input<FormControl>(new FormControl());
}
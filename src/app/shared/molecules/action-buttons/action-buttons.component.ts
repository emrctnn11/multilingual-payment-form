import {
  Component,
  EventEmitter,
  input,
  Output,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'molecule-action-buttons',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="flex justify-between items-center gap-4 mt-4">
      <select
        class="px-2 py-1 border border-gray-300 rounded text-sm"
        (change)="onLangChange($event)"
        [value]="currentLang"
      >
        <option *ngFor="let lang of availableLangs" [value]="lang">
          {{ lang.toUpperCase() }}
        </option>
      </select>

      <div class="flex gap-2">
        <button
          type="button"
          class="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
          (click)="cancel.emit()"
        >
          {{ cancelText() | translate }}
        </button>
        <button
          type="submit"
          class="px-4 py-2 text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          [disabled]="disableSubmit()"
        >
          {{ submitText() | translate }}
        </button>
      </div>
    </div>
  `,
})
export class ActionButtonsComponent {
  translate = inject(TranslateService);
  cancelText = input<string>('Cancel');
  submitText = input<string>('Submit');
  disableSubmit = input<boolean>(false);
  @Output() cancel = new EventEmitter<void>();

  // 🔤 Language selection
  availableLangs = ['en', 'ar'];
  currentLang = this.translate.currentLang || 'en';

  onLangChange(event: Event): void {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

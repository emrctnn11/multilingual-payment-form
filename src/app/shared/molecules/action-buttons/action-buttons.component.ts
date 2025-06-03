import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'molecule-action-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-end gap-2 mt-4">
      <button
        type="button"
        class="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
        (click)="cancel.emit()"
      >
        {{ cancelText() }}
      </button>
      <button
        type="submit"
        class="px-4 py-2 text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        [disabled]="disableSubmit()"
      >
        {{ submitText() }}
      </button>
    </div>
  `,
})
export class ActionButtonsComponent {
  cancelText = input<string>('Cancel');
  submitText = input<string>('Submit');
  disableSubmit = input<boolean>(false);
  @Output() cancel = new EventEmitter<void>();
}

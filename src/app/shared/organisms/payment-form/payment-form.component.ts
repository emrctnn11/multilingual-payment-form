import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabeledInputComponent } from '../../molecules/labeled-input/labeled-input.component';
import { LabeledTextareaComponent } from '../../molecules/labeled-textarea/labeled-textarea.component';
import { CurrencyInputComponent } from '../../molecules/currency-input/currency-input.component';
import { ActionButtonsComponent } from '../../molecules/action-buttons/action-buttons.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LabeledDateInputComponent } from '../../molecules/date-input/date-input.component';
import { InfoTextComponent } from '../../atoms/text/info-text/info-text.component';

@Component({
  selector: 'organism-payment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    LabeledInputComponent,
    LabeledTextareaComponent,
    LabeledDateInputComponent,
    CurrencyInputComponent,
    ActionButtonsComponent,
    InfoTextComponent, // Eğer bu bileşeni kullanacaksanız
  ],
  templateUrl: './payment-form.component.html',
})
export class PaymentFormComponent {
  private fb = inject(FormBuilder);
  private translate = inject(TranslateService);

  form: FormGroup = this.fb.group({
    accountNumber: this.fb.control<string>('', Validators.required),
    paymentDate: this.fb.control<string>('', Validators.required),
    invoiceAmount: this.fb.control<number | null>(null, Validators.required),
    mainAmount: this.fb.control<number | null>(null, Validators.required),
    comment: this.fb.control<string>(''),
  });

  // 🔽 Getter'lar (FormControl olarak dönüyorlar)
  get accountNumberControl(): FormControl {
    return this.form.get('accountNumber') as FormControl;
  }

  get paymentDateControl(): FormControl {
    return this.form.get('paymentDate') as FormControl;
  }

  get invoiceAmountControl(): FormControl {
    return this.form.get('invoiceAmount') as FormControl;
  }

  get mainAmountControl(): FormControl {
    return this.form.get('mainAmount') as FormControl;
  }

  get commentControl(): FormControl {
    return this.form.get('comment') as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
    }
  }

  onCancel(): void {
    console.log('Cancelled');
    this.form.reset();
  }
}
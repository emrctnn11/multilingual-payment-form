// src/app/pages/payment-form-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from '../../shared/organisms/payment-form/payment-form.component';

@Component({
  selector: 'page-payment-form',
  standalone: true,
  imports: [CommonModule, PaymentFormComponent],
  template: `<organism-payment-form />`,
})
export class PaymentFormPageComponent {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormPageComponent } from './payment-form-page.component';

describe('PaymentFormPageComponent', () => {
  let component: PaymentFormPageComponent;
  let fixture: ComponentFixture<PaymentFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

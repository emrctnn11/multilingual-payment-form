import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledTextareaComponent } from './labeled-textarea.component';

describe('LabeledTextareaComponent', () => {
  let component: LabeledTextareaComponent;
  let fixture: ComponentFixture<LabeledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeledTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabeledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

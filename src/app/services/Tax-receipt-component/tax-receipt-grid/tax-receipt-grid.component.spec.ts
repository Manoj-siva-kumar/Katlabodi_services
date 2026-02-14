/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaxReceiptGridComponent } from './tax-receipt-grid.component';

describe('TaxReceiptGridComponent', () => {
  let component: TaxReceiptGridComponent;
  let fixture: ComponentFixture<TaxReceiptGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxReceiptGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxReceiptGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

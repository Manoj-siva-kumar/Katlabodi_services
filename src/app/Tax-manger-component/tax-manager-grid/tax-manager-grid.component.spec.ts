/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaxManagerGridComponent } from './tax-manager-grid.component';

describe('TaxManagerGridComponent', () => {
  let component: TaxManagerGridComponent;
  let fixture: ComponentFixture<TaxManagerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxManagerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxManagerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

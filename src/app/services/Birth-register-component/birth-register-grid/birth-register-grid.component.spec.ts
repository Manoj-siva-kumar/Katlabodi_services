/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BirthRegisterGridComponent } from './birth-register-grid.component';

describe('BirthRegisterGridComponent', () => {
  let component: BirthRegisterGridComponent;
  let fixture: ComponentFixture<BirthRegisterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthRegisterGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthRegisterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

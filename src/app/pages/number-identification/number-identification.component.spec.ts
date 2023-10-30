import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberIdentificationComponent } from './number-identification.component';

describe('NumberIdentificationComponent', () => {
  let component: NumberIdentificationComponent;
  let fixture: ComponentFixture<NumberIdentificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberIdentificationComponent]
    });
    fixture = TestBed.createComponent(NumberIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

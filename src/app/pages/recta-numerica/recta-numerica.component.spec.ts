import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectaNumericaComponent } from './recta-numerica.component';

describe('RectaNumericaComponent', () => {
  let component: RectaNumericaComponent;
  let fixture: ComponentFixture<RectaNumericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectaNumericaComponent]
    });
    fixture = TestBed.createComponent(RectaNumericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

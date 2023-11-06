import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionBasicoComponent } from './multiplicacion-basico.component';

describe('MultiplicacionBasicoComponent', () => {
  let component: MultiplicacionBasicoComponent;
  let fixture: ComponentFixture<MultiplicacionBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionBasicoComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

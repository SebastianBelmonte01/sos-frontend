import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumasRestasBasicoComponent } from './sumas-restas-basico.component';

describe('SumasRestasBasicoComponent', () => {
  let component: SumasRestasBasicoComponent;
  let fixture: ComponentFixture<SumasRestasBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumasRestasBasicoComponent]
    });
    fixture = TestBed.createComponent(SumasRestasBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

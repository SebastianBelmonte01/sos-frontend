import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDecenasCentenasComponent } from './unidades-decenas-centenas.component';

describe('UnidadesDecenasCentenasComponent', () => {
  let component: UnidadesDecenasCentenasComponent;
  let fixture: ComponentFixture<UnidadesDecenasCentenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesDecenasCentenasComponent]
    });
    fixture = TestBed.createComponent(UnidadesDecenasCentenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

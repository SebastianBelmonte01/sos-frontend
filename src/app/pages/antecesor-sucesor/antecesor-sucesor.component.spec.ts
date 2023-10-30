import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecesorSucesorComponent } from './antecesor-sucesor.component';

describe('AntecesorSucesorComponent', () => {
  let component: AntecesorSucesorComponent;
  let fixture: ComponentFixture<AntecesorSucesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntecesorSucesorComponent]
    });
    fixture = TestBed.createComponent(AntecesorSucesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

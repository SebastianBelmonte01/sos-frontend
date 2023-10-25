import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombOperationsComponent } from './comb-operations.component';

describe('CombOperationsComponent', () => {
  let component: CombOperationsComponent;
  let fixture: ComponentFixture<CombOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombOperationsComponent]
    });
    fixture = TestBed.createComponent(CombOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

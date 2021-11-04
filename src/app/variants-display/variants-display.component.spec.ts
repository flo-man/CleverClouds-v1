import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantsDisplayComponent } from './variants-display.component';

describe('VariantsDisplayComponent', () => {
  let component: VariantsDisplayComponent;
  let fixture: ComponentFixture<VariantsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorsDisplayComponent } from './flavors-display.component';

describe('FlavorsDisplayComponent', () => {
  let component: FlavorsDisplayComponent;
  let fixture: ComponentFixture<FlavorsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDonComponent } from './calc-don.component';

describe('CalcDonComponent', () => {
  let component: CalcDonComponent;
  let fixture: ComponentFixture<CalcDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesAntennesComponent } from './les-antennes.component';

describe('LesAntennesComponent', () => {
  let component: LesAntennesComponent;
  let fixture: ComponentFixture<LesAntennesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesAntennesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesAntennesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

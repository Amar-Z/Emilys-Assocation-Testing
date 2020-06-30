import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentDuTravailComponent } from './accident-du-travail.component';

describe('AccidentDuTravailComponent', () => {
  let component: AccidentDuTravailComponent;
  let fixture: ComponentFixture<AccidentDuTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentDuTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentDuTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

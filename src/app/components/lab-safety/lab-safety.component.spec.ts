import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSafetyComponent } from './lab-safety.component';

describe('LabSafetyComponent', () => {
  let component: LabSafetyComponent;
  let fixture: ComponentFixture<LabSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

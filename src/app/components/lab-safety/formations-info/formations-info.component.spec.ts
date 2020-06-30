import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsInfoComponent } from './formations-info.component';

describe('FormationsInfoComponent', () => {
  let component: FormationsInfoComponent;
  let fixture: ComponentFixture<FormationsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioActiveComponent } from './radio-active.component';

describe('RadioActiveComponent', () => {
  let component: RadioActiveComponent;
  let fixture: ComponentFixture<RadioActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

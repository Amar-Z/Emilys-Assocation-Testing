import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelitsComponent } from './delits.component';

describe('DelitsComponent', () => {
  let component: DelitsComponent;
  let fixture: ComponentFixture<DelitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

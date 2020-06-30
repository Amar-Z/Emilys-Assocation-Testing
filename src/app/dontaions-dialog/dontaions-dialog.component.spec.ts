import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DontaionsDialogComponent } from './dontaions-dialog.component';

describe('DontaionsDialogComponent', () => {
  let component: DontaionsDialogComponent;
  let fixture: ComponentFixture<DontaionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DontaionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DontaionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

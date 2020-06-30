import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FauteInexcusableComponent } from './faute-inexcusable.component';

describe('FauteInexcusableComponent', () => {
  let component: FauteInexcusableComponent;
  let fixture: ComponentFixture<FauteInexcusableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauteInexcusableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauteInexcusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

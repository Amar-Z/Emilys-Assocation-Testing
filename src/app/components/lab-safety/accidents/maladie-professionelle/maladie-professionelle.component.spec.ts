import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieProfessionelleComponent } from './maladie-professionelle.component';

describe('MaladieProfessionelleComponent', () => {
  let component: MaladieProfessionelleComponent;
  let fixture: ComponentFixture<MaladieProfessionelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaladieProfessionelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladieProfessionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

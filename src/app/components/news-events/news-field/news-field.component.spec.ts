import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFieldComponent } from './news-field.component';

describe('NewsFieldComponent', () => {
  let component: NewsFieldComponent;
  let fixture: ComponentFixture<NewsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

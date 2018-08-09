import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingVisitComponent } from './adding-visit.component';

describe('AddingVisitComponent', () => {
  let component: AddingVisitComponent;
  let fixture: ComponentFixture<AddingVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

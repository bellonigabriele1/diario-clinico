import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineItemComponentComponent } from './routine-item-component.component';

describe('RoutineItemComponentComponent', () => {
  let component: RoutineItemComponentComponent;
  let fixture: ComponentFixture<RoutineItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

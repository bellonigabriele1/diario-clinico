import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineComponentComponent } from './routine-component.component';

describe('RoutineComponentComponent', () => {
  let component: RoutineComponentComponent;
  let fixture: ComponentFixture<RoutineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

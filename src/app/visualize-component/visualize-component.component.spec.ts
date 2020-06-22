import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeComponentComponent } from './visualize-component.component';

describe('VisualizeComponentComponent', () => {
  let component: VisualizeComponentComponent;
  let fixture: ComponentFixture<VisualizeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

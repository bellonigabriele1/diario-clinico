import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedeventsComponentComponent } from './medevents-component.component';

describe('MedeventsComponentComponent', () => {
  let component: MedeventsComponentComponent;
  let fixture: ComponentFixture<MedeventsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedeventsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedeventsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTrackerComponent } from './program-tracker.component';

describe('ProgramTrackerComponent', () => {
  let component: ProgramTrackerComponent;
  let fixture: ComponentFixture<ProgramTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

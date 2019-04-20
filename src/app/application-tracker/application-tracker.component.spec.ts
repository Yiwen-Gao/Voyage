import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatoinTrackerComponent } from './application-tracker.component';

describe('ProgramTrackerComponent', () => {
  let component: ApplicatoinTrackerComponent;
  let fixture: ComponentFixture<ApplicatoinTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicatoinTrackerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicatoinTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApplicantsComponent } from './pending-applicants.component';

describe('PendingApplicantsComponent', () => {
  let component: PendingApplicantsComponent;
  let fixture: ComponentFixture<PendingApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

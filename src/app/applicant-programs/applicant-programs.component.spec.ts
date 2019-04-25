import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantProgramsComponent } from './applicant-programs.component';

describe('ApplicantProgramsComponent', () => {
  let component: ApplicantProgramsComponent;
  let fixture: ComponentFixture<ApplicantProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

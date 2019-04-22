import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsInterfaceComponent } from './admissions-interface.component';

describe('AdmissionsInterfaceComponent', () => {
  let component: AdmissionsInterfaceComponent;
  let fixture: ComponentFixture<AdmissionsInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionsInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

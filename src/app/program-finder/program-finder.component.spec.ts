import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFinderComponent } from './program-finder.component';

describe('ProgramFinderComponent', () => {
  let component: ProgramFinderComponent;
  let fixture: ComponentFixture<ProgramFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

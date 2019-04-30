import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCustomizationComponent } from './program-customization.component';

describe('ProgramCustomizationComponent', () => {
  let component: ProgramCustomizationComponent;
  let fixture: ComponentFixture<ProgramCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

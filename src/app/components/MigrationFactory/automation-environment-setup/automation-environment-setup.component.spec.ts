import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationEnvironmentSetupComponent } from './automation-environment-setup.component';

describe('AutomationEnvironmentSetupComponent', () => {
  let component: AutomationEnvironmentSetupComponent;
  let fixture: ComponentFixture<AutomationEnvironmentSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationEnvironmentSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationEnvironmentSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

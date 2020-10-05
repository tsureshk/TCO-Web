import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationEnvironmentUpdateDeleteComponent } from './automation-environment-update-delete.component';

describe('AutomationEnvironmentUpdateDeleteComponent', () => {
  let component: AutomationEnvironmentUpdateDeleteComponent;
  let fixture: ComponentFixture<AutomationEnvironmentUpdateDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationEnvironmentUpdateDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationEnvironmentUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

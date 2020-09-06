import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationTaskCreationComponent } from './automation-task-creation.component';

describe('AutomationTaskCreationComponent', () => {
  let component: AutomationTaskCreationComponent;
  let fixture: ComponentFixture<AutomationTaskCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationTaskCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationTaskCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

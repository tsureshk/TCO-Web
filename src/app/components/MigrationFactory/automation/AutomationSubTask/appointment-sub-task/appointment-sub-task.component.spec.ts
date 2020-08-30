import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSubTaskComponent } from './appointment-sub-task.component';

describe('AppointmentSubTaskComponent', () => {
  let component: AppointmentSubTaskComponent;
  let fixture: ComponentFixture<AppointmentSubTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentSubTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSubTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

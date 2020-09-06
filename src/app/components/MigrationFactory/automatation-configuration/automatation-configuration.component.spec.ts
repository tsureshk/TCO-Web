import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatationConfigurationComponent } from './automatation-configuration.component';

describe('AutomatationConfigurationComponent', () => {
  let component: AutomatationConfigurationComponent;
  let fixture: ComponentFixture<AutomatationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatationConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationOutputComponent } from './automation-output.component';

describe('AutomationOutputComponent', () => {
  let component: AutomationOutputComponent;
  let fixture: ComponentFixture<AutomationOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

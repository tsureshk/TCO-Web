import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomationMigrationComponent } from './home-automation-migration.component';

describe('HomeAutomationMigrationComponent', () => {
  let component: HomeAutomationMigrationComponent;
  let fixture: ComponentFixture<HomeAutomationMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAutomationMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAutomationMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

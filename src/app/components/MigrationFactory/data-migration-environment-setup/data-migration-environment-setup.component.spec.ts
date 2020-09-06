import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMigrationEnvironmentSetupComponent } from './data-migration-environment-setup.component';

describe('DataMigrationEnvironmentSetupComponent', () => {
  let component: DataMigrationEnvironmentSetupComponent;
  let fixture: ComponentFixture<DataMigrationEnvironmentSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMigrationEnvironmentSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMigrationEnvironmentSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

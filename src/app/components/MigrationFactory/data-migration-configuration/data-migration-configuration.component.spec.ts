import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMigrationConfigurationComponent } from './data-migration-configuration.component';

describe('DataMigrationConfigurationComponent', () => {
  let component: DataMigrationConfigurationComponent;
  let fixture: ComponentFixture<DataMigrationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMigrationConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMigrationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

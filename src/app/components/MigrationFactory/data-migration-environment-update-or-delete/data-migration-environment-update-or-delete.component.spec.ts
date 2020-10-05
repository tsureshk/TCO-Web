import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMigrationEnvironmentUpdateOrDeleteComponent } from './data-migration-environment-update-or-delete.component';

describe('DataMigrationEnvironmentUpdateOrDeleteComponent', () => {
  let component: DataMigrationEnvironmentUpdateOrDeleteComponent;
  let fixture: ComponentFixture<DataMigrationEnvironmentUpdateOrDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMigrationEnvironmentUpdateOrDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMigrationEnvironmentUpdateOrDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

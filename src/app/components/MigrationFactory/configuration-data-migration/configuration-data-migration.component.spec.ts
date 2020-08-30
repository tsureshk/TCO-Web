import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationDataMigrationComponent } from './configuration-data-migration.component';

describe('ConfigurationDataMigrationComponent', () => {
  let component: ConfigurationDataMigrationComponent;
  let fixture: ComponentFixture<ConfigurationDataMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationDataMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationDataMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

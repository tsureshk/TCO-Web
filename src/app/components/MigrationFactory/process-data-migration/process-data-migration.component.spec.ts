import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDataMigrationComponent } from './process-data-migration.component';

describe('ProcessDataMigrationComponent', () => {
  let component: ProcessDataMigrationComponent;
  let fixture: ComponentFixture<ProcessDataMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessDataMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDataMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

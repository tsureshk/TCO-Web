import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDataMigrationComponent } from './output-data-migration.component';

describe('OutputDataMigrationComponent', () => {
  let component: OutputDataMigrationComponent;
  let fixture: ComponentFixture<OutputDataMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputDataMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDataMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

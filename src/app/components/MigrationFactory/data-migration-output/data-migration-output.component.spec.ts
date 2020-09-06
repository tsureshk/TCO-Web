import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMigrationOutputComponent } from './data-migration-output.component';

describe('DataMigrationOutputComponent', () => {
  let component: DataMigrationOutputComponent;
  let fixture: ComponentFixture<DataMigrationOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMigrationOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMigrationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

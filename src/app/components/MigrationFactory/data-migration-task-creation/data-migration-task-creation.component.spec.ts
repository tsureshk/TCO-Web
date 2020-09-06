import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMigrationTaskCreationComponent } from './data-migration-task-creation.component';

describe('DataMigrationTaskCreationComponent', () => {
  let component: DataMigrationTaskCreationComponent;
  let fixture: ComponentFixture<DataMigrationTaskCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMigrationTaskCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMigrationTaskCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

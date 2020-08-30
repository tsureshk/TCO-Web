import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamigrationProgressComponent } from './datamigration-progress.component';

describe('DatamigrationProgressComponent', () => {
  let component: DatamigrationProgressComponent;
  let fixture: ComponentFixture<DatamigrationProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamigrationProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamigrationProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

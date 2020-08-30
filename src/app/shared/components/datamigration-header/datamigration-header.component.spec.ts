import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamigrationHeaderComponent } from './datamigration-header.component';

describe('DatamigrationHeaderComponent', () => {
  let component: DatamigrationHeaderComponent;
  let fixture: ComponentFixture<DatamigrationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamigrationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamigrationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

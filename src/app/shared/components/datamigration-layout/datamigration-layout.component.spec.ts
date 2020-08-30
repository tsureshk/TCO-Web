import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamigrationLayoutComponent } from './datamigration-layout.component';

describe('DatamigrationLayoutComponent', () => {
  let component: DatamigrationLayoutComponent;
  let fixture: ComponentFixture<DatamigrationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamigrationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamigrationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

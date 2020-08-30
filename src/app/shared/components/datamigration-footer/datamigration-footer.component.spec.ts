import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamigrationFooterComponent } from './datamigration-footer.component';

describe('DatamigrationFooterComponent', () => {
  let component: DatamigrationFooterComponent;
  let fixture: ComponentFixture<DatamigrationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamigrationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamigrationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDataMigrationComponent } from './home-data-migration.component';

describe('HomeDataMigrationComponent', () => {
  let component: HomeDataMigrationComponent;
  let fixture: ComponentFixture<HomeDataMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDataMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDataMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

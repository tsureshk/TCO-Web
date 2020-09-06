import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemigrationComponent } from './homemigration.component';

describe('HomemigrationComponent', () => {
  let component: HomemigrationComponent;
  let fixture: ComponentFixture<HomemigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

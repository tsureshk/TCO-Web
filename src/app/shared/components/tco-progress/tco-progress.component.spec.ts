import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoProgressComponent } from './tco-progress.component';

describe('TcoProgressComponent', () => {
  let component: TcoProgressComponent;
  let fixture: ComponentFixture<TcoProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

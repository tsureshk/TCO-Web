import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoHeaderComponent } from './tco-header.component';

describe('TcoHeaderComponent', () => {
  let component: TcoHeaderComponent;
  let fixture: ComponentFixture<TcoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

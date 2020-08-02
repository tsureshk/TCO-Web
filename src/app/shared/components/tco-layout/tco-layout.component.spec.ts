import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoLayoutComponent } from './tco-layout.component';

describe('TcoLayoutComponent', () => {
  let component: TcoLayoutComponent;
  let fixture: ComponentFixture<TcoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

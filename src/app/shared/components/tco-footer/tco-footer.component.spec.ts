import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoFooterComponent } from './tco-footer.component';

describe('TcoFooterComponent', () => {
  let component: TcoFooterComponent;
  let fixture: ComponentFixture<TcoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

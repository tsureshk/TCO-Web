import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcologinComponent } from './tcologin.component';

describe('TcologinComponent', () => {
  let component: TcologinComponent;
  let fixture: ComponentFixture<TcologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

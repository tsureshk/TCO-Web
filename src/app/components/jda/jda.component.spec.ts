import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdaComponent } from './jda.component';

describe('JdaComponent', () => {
  let component: JdaComponent;
  let fixture: ComponentFixture<JdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

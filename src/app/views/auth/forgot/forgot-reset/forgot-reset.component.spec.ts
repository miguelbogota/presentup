import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotResetComponent } from './forgot-reset.component';

describe('ForgotResetComponent', () => {
  let component: ForgotResetComponent;
  let fixture: ComponentFixture<ForgotResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

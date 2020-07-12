import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMainComponent } from './signin-main.component';

describe('SigninMainComponent', () => {
  let component: SigninMainComponent;
  let fixture: ComponentFixture<SigninMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

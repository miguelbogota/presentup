import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMultifactorComponent } from './signin-multifactor.component';

describe('SigninMultifactorComponent', () => {
  let component: SigninMultifactorComponent;
  let fixture: ComponentFixture<SigninMultifactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninMultifactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninMultifactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

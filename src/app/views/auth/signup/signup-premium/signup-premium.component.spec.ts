import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPremiumComponent } from './signup-premium.component';

describe('SignupPremiumComponent', () => {
  let component: SignupPremiumComponent;
  let fixture: ComponentFixture<SignupPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

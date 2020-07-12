import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAppearanceComponent } from './signup-appearance.component';

describe('SignupAppearanceComponent', () => {
  let component: SignupAppearanceComponent;
  let fixture: ComponentFixture<SignupAppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

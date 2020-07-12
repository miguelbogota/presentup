import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalGuidelinesComponent } from './legal-guidelines.component';

describe('LegalGuidelinesComponent', () => {
  let component: LegalGuidelinesComponent;
  let fixture: ComponentFixture<LegalGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

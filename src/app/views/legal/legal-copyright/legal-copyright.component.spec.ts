import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCopyrightComponent } from './legal-copyright.component';

describe('LegalCopyrightComponent', () => {
  let component: LegalCopyrightComponent;
  let fixture: ComponentFixture<LegalCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPrivacyComponent } from './settings-privacy.component';

describe('SettingsPrivacyComponent', () => {
  let component: SettingsPrivacyComponent;
  let fixture: ComponentFixture<SettingsPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

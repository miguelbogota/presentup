import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsStatisticsComponent } from './settings-statistics.component';

describe('SettingsStatisticsComponent', () => {
  let component: SettingsStatisticsComponent;
  let fixture: ComponentFixture<SettingsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

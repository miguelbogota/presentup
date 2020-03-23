import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerCropperComponent } from './handler-cropper.component';

describe('HandlerCropperComponent', () => {
  let component: HandlerCropperComponent;
  let fixture: ComponentFixture<HandlerCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

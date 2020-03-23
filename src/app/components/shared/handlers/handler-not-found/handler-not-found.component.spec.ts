import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerNotFoundComponent } from './handler-not-found.component';

describe('ErrorComponent', () => {
  let component: HandlerNotFoundComponent;
  let fixture: ComponentFixture<HandlerNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

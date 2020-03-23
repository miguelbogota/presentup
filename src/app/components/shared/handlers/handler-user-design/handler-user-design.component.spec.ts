import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerUserDesignComponent } from './handler-user-design.component';

describe('UserComponent', () => {
  let component: HandlerUserDesignComponent;
  let fixture: ComponentFixture<HandlerUserDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerUserDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerUserDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerUserComponent } from './handler-user.component';

describe('UserComponent', () => {
  let component: HandlerUserComponent;
  let fixture: ComponentFixture<HandlerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

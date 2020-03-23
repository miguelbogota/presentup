import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesBasicComponent } from './messages-basic.component';

describe('MessagesBasicComponent', () => {
  let component: MessagesBasicComponent;
  let fixture: ComponentFixture<MessagesBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

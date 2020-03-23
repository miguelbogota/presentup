import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBasicComponent } from './chat-basic.component';

describe('ChatBasicComponent', () => {
  let component: ChatBasicComponent;
  let fixture: ComponentFixture<ChatBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

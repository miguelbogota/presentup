import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPreviewBasicComponent } from './chat-preview-basic.component';

describe('ChatPreviewBasicComponent', () => {
  let component: ChatPreviewBasicComponent;
  let fixture: ComponentFixture<ChatPreviewBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPreviewBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPreviewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

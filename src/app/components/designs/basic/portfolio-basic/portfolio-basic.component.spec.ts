import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBasicComponent } from './portfolio-basic.component';

describe('PortfolioBasicComponent', () => {
  let component: PortfolioBasicComponent;
  let fixture: ComponentFixture<PortfolioBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

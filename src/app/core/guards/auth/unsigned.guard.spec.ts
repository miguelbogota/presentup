import { TestBed } from '@angular/core/testing';

import { UnsignedGuard } from './unsigned.guard';

describe('SignedGuard', () => {
  let guard: UnsignedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsignedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

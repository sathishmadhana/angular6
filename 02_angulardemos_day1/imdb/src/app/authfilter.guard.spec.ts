import { TestBed, async, inject } from '@angular/core/testing';

import { AuthfilterGuard } from './authfilter.guard';

describe('AuthfilterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthfilterGuard]
    });
  });

  it('should ...', inject([AuthfilterGuard], (guard: AuthfilterGuard) => {
    expect(guard).toBeTruthy();
  }));
});

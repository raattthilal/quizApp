import { TestBed } from '@angular/core/testing';

import { ForgetPassService } from './forget-pass.service';

describe('ForgetPassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgetPassService = TestBed.get(ForgetPassService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthFormServiceService } from './auth-form-service.service';

describe('AuthFormServiceService', () => {
  let service: AuthFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TypeResidenceService } from './type-residence.service';

describe('TypeResidenceService', () => {
  let service: TypeResidenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeResidenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InvironmentService } from './invironment.service';

describe('InvironmentService', () => {
  let service: InvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

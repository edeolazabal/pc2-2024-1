import { TestBed } from '@angular/core/testing';

import { MinaService } from './mina.service';

describe('MinaService', () => {
  let service: MinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

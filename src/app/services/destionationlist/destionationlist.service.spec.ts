import { TestBed } from '@angular/core/testing';

import { DestionationlistService } from './destionationlist.service';

describe('DestionationlistService', () => {
  let service: DestionationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestionationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

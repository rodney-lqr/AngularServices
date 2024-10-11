import { TestBed } from '@angular/core/testing';

import { SportlistService } from './sportlist.service';

describe('SportlistService', () => {
  let service: SportlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

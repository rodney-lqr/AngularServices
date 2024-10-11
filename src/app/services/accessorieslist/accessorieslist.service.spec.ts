import { TestBed } from '@angular/core/testing';

import { AccessorieslistService } from './accessorieslist.service';

describe('AccessorieslistService', () => {
  let service: AccessorieslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessorieslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

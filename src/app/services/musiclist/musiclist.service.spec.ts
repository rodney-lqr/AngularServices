import { TestBed } from '@angular/core/testing';

import { MusiclistService } from './musiclist.service';

describe('MusiclistService', () => {
  let service: MusiclistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusiclistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

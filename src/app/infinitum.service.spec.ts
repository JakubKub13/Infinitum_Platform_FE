import { TestBed } from '@angular/core/testing';

import { InfinitumService } from './infinitum.service';

describe('InfinitumService', () => {
  let service: InfinitumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfinitumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

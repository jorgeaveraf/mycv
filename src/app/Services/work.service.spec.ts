import { TestBed } from '@angular/core/testing';

import { WorkService } from './work.service';

describe('WorkService', () => {
  let service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});

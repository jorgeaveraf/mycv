import { TestBed } from '@angular/core/testing';

import { CertificationService } from './certificates.service';

describe('CertificatesService', () => {
  let service: CertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificationService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});

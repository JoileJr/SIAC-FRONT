import { TestBed } from '@angular/core/testing';

import { EnfermeiroService } from './enfermeiro.service';

describe('EnfermeiroService', () => {
  let service: EnfermeiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfermeiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

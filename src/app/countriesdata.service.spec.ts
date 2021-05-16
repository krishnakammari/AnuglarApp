import { TestBed } from '@angular/core/testing';

import { CountriesdataService } from './countriesdata.service';

describe('CountriesdataService', () => {
  let service: CountriesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

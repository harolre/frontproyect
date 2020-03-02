import { TestBed } from '@angular/core/testing';

import { ServiceChef } from './service.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceChef = TestBed.get(ServiceChef);
    expect(service).toBeTruthy();
  });
});

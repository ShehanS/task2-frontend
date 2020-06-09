import { TestBed } from '@angular/core/testing';

import { RESTClientService } from './restclient.service';

describe('RESTClientService', () => {
  let service: RESTClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

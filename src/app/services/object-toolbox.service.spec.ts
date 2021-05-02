import { TestBed } from '@angular/core/testing';

import { ObjectToolboxService } from './object-toolbox.service';

describe('ObjectToolboxService', () => {
  let service: ObjectToolboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectToolboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddMemoService } from './add-memo.service';

describe('AddMemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMemoService = TestBed.get(AddMemoService);
    expect(service).toBeTruthy();
  });
});

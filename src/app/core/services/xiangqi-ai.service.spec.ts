import { TestBed } from '@angular/core/testing';

import { XiangqiAiService } from './xiangqi-ai.service';

describe('XiangqiAiService', () => {
  let service: XiangqiAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XiangqiAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

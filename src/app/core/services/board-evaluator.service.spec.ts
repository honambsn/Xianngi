import { TestBed } from '@angular/core/testing';

import { BoardEvaluatorService } from './board-evaluator.service';

describe('BoardEvaluatorService', () => {
  let service: BoardEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

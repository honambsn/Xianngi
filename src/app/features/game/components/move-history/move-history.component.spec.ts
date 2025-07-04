import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveHistoryComponent } from './move-history.component';

describe('MoveHistoryComponent', () => {
  let component: MoveHistoryComponent;
  let fixture: ComponentFixture<MoveHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

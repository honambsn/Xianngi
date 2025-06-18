import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultySelectMenuComponent } from './difficulty-select-menu.component';

describe('DifficultySelectMenuComponent', () => {
  let component: DifficultySelectMenuComponent;
  let fixture: ComponentFixture<DifficultySelectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifficultySelectMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultySelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

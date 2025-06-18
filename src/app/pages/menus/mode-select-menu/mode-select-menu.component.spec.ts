import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSelectMenuComponent } from './mode-select-menu.component';

describe('ModeSelectMenuComponent', () => {
  let component: ModeSelectMenuComponent;
  let fixture: ComponentFixture<ModeSelectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeSelectMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

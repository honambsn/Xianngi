import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionMenuComponent } from './promotion-menu.component';

describe('PromotionMenuComponent', () => {
  let component: PromotionMenuComponent;
  let fixture: ComponentFixture<PromotionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayExitMenuComponent } from './play-exit-menu.component';

describe('PlayExitMenuComponent', () => {
  let component: PlayExitMenuComponent;
  let fixture: ComponentFixture<PlayExitMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayExitMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayExitMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

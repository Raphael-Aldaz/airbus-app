import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsNavBarComponent } from './aircrafts-nav-bar.component';

describe('AircraftsNavBarComponent', () => {
  let component: AircraftsNavBarComponent;
  let fixture: ComponentFixture<AircraftsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftsNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

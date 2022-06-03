import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourdarjeelingComponent } from './tourdarjeeling.component';

describe('TourdarjeelingComponent', () => {
  let component: TourdarjeelingComponent;
  let fixture: ComponentFixture<TourdarjeelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourdarjeelingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourdarjeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

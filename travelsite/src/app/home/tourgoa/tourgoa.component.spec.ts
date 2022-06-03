import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourgoaComponent } from './tourgoa.component';

describe('TourgoaComponent', () => {
  let component: TourgoaComponent;
  let fixture: ComponentFixture<TourgoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourgoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourgoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

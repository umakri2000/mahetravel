import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpassangerComponent } from './viewpassanger.component';

describe('ViewpassangerComponent', () => {
  let component: ViewpassangerComponent;
  let fixture: ComponentFixture<ViewpassangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpassangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpassangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

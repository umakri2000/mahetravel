import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourmunnarComponent } from './tourmunnar.component';

describe('TourmunnarComponent', () => {
  let component: TourmunnarComponent;
  let fixture: ComponentFixture<TourmunnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourmunnarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourmunnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

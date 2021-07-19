import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculathoursComponent } from './calculathours.component';

describe('CalculathoursComponent', () => {
  let component: CalculathoursComponent;
  let fixture: ComponentFixture<CalculathoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculathoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculathoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

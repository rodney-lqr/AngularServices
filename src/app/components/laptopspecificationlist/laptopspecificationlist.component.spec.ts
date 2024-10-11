import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecificationlistComponent } from './laptopspecificationlist.component';

describe('LaptopspecificationlistComponent', () => {
  let component: LaptopspecificationlistComponent;
  let fixture: ComponentFixture<LaptopspecificationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopspecificationlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspecificationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

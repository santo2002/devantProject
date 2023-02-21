import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPointDesignComponent } from './power-point-design.component';

describe('PowerPointDesignComponent', () => {
  let component: PowerPointDesignComponent;
  let fixture: ComponentFixture<PowerPointDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerPointDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerPointDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageDesignComponent } from './landing-page-design.component';

describe('LandingPageDesignComponent', () => {
  let component: LandingPageDesignComponent;
  let fixture: ComponentFixture<LandingPageDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

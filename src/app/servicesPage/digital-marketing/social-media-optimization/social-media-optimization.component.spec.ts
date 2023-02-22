import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaOptimizationComponent } from './social-media-optimization.component';

describe('SocialMediaOptimizationComponent', () => {
  let component: SocialMediaOptimizationComponent;
  let fixture: ComponentFixture<SocialMediaOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaOptimizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

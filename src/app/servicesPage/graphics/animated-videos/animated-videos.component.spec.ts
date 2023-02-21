import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedVideosComponent } from './animated-videos.component';

describe('AnimatedVideosComponent', () => {
  let component: AnimatedVideosComponent;
  let fixture: ComponentFixture<AnimatedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

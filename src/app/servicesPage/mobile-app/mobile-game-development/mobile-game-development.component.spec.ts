import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileGameDevelopmentComponent } from './mobile-game-development.component';

describe('MobileGameDevelopmentComponent', () => {
  let component: MobileGameDevelopmentComponent;
  let fixture: ComponentFixture<MobileGameDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileGameDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileGameDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

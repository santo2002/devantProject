import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsInfographicComponent } from './graphics-infographic.component';

describe('GraphicsInfographicComponent', () => {
  let component: GraphicsInfographicComponent;
  let fixture: ComponentFixture<GraphicsInfographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsInfographicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsInfographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureDesigningComponent } from './brochure-designing.component';

describe('BrochureDesigningComponent', () => {
  let component: BrochureDesigningComponent;
  let fixture: ComponentFixture<BrochureDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochureDesigningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrochureDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceWebsiteDevelopmenComponent } from './ecommerce-website-developmen.component';

describe('EcommerceWebsiteDevelopmenComponent', () => {
  let component: EcommerceWebsiteDevelopmenComponent;
  let fixture: ComponentFixture<EcommerceWebsiteDevelopmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceWebsiteDevelopmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceWebsiteDevelopmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

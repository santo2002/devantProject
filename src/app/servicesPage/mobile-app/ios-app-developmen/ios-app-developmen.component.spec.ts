import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosAppDevelopmenComponent } from './ios-app-developmen.component';

describe('IosAppDevelopmenComponent', () => {
  let component: IosAppDevelopmenComponent;
  let fixture: ComponentFixture<IosAppDevelopmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosAppDevelopmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosAppDevelopmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCorporateComponent } from './logo-corporate.component';

describe('LogoCorporateComponent', () => {
  let component: LogoCorporateComponent;
  let fixture: ComponentFixture<LogoCorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCorporateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

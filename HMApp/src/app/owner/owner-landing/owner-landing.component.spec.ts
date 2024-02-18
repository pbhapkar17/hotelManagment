import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLandingComponent } from './owner-landing.component';

describe('OwnerLandingComponent', () => {
  let component: OwnerLandingComponent;
  let fixture: ComponentFixture<OwnerLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerLandingComponent]
    });
    fixture = TestBed.createComponent(OwnerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

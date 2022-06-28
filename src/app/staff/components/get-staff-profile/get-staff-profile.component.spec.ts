import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStaffProfileComponent } from './get-staff-profile.component';

describe('GetStaffProfileComponent', () => {
  let component: GetStaffProfileComponent;
  let fixture: ComponentFixture<GetStaffProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStaffProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStaffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

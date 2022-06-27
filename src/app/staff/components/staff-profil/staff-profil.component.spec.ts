import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProfilComponent } from './staff-profil.component';

describe('StaffProfilComponent', () => {
  let component: StaffProfilComponent;
  let fixture: ComponentFixture<StaffProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

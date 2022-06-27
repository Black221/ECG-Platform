import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcgPatientComponent } from './ecg-patient.component';

describe('EcgPatientComponent', () => {
  let component: EcgPatientComponent;
  let fixture: ComponentFixture<EcgPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcgPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcgPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

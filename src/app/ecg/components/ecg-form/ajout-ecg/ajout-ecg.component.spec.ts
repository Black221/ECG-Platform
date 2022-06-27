import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEcgComponent } from './ajout-ecg.component';

describe('AjoutEcgComponent', () => {
  let component: AjoutEcgComponent;
  let fixture: ComponentFixture<AjoutEcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEcgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

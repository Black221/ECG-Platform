import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMetadonneesComponent } from './ajout-metadonnees.component';

describe('AjoutMetadonneesComponent', () => {
  let component: AjoutMetadonneesComponent;
  let fixture: ComponentFixture<AjoutMetadonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMetadonneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMetadonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

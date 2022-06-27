import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcgListItemComponent } from './ecg-list-item.component';

describe('EcgListItemComponent', () => {
  let component: EcgListItemComponent;
  let fixture: ComponentFixture<EcgListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcgListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcgListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

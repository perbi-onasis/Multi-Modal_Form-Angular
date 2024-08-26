import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrackerComponent } from './modal-tracker.component';

describe('ModalTrackerComponent', () => {
  let component: ModalTrackerComponent;
  let fixture: ComponentFixture<ModalTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

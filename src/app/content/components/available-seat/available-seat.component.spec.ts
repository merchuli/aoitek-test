import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSeatComponent } from './available-seat.component';

describe('AvailableSeatComponent', () => {
  let component: AvailableSeatComponent;
  let fixture: ComponentFixture<AvailableSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

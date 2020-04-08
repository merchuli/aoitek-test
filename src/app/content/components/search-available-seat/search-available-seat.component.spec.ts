import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAvailableSeatComponent } from './search-available-seat.component';

describe('SearchAvailableSeatComponent', () => {
  let component: SearchAvailableSeatComponent;
  let fixture: ComponentFixture<SearchAvailableSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAvailableSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAvailableSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStopsComponent } from './search-stops.component';

describe('SearchStopsComponent', () => {
  let component: SearchStopsComponent;
  let fixture: ComponentFixture<SearchStopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

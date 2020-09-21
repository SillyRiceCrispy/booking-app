import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsAndHotelsComponent } from './flights-and-hotels.component';

describe('FlightsAndHotelsComponent', () => {
  let component: FlightsAndHotelsComponent;
  let fixture: ComponentFixture<FlightsAndHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsAndHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsAndHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

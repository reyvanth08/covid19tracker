import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatByCountryComponent } from './stat-by-country.component';

describe('StatByCountryComponent', () => {
  let component: StatByCountryComponent;
  let fixture: ComponentFixture<StatByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

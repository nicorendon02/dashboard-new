import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorChartsComponent } from './sensor-charts.component';

describe('SensorChartsComponent', () => {
  let component: SensorChartsComponent;
  let fixture: ComponentFixture<SensorChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensorChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

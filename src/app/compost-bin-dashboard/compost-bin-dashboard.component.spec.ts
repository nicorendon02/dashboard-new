import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompostBinDashboardComponent } from './compost-bin-dashboard.component';

describe('CompostBinDashboardComponent', () => {
  let component: CompostBinDashboardComponent;
  let fixture: ComponentFixture<CompostBinDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompostBinDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompostBinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

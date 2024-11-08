import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompostBinDashboardComponent } from './compost-bin-dashboard/compost-bin-dashboard.component';
import { SensorChartsComponent } from './sensor-charts/sensor-charts.component';
import { AgCharts } from 'ag-charts-angular';
import { AgChartsModule } from 'ag-charts-angular'; // Import AG Charts Angular module

@NgModule({
  declarations: [
    AppComponent,
    CompostBinDashboardComponent,
    SensorChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

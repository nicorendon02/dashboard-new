import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor-charts',
  templateUrl: './sensor-charts.component.html',
  styleUrl: './sensor-charts.component.scss'
})
export class SensorChartsComponent {
  temperatureOptions: any;
  humidityOptions: any;

  ngOnInit() {
    const sensorData = this.loadSensorData();

    this.temperatureOptions = {
      data: sensorData,
      series: [
        {
          type: 'line',
          xKey: 'timestamp',
          yKey: 'temperature',
          stroke: '#ff5733',
        },
      ],
      title: { text: 'Temperature Over Time' },
      axes: [
        { type: 'time', position: 'bottom', title: { text: 'Time' } },
        { type: 'number', position: 'left', title: { text: 'Temperature (°C)' } },
      ],
    };

    this.humidityOptions = {
      data: sensorData,
      series: [
        {
          type: 'line',
          xKey: 'timestamp',
          yKey: 'humidity',
          stroke: '#3498db',
        },
      ],
      title: { text: 'Humidity Over Time' },
      axes: [
        { type: 'time', position: 'bottom', title: { text: 'Time' } },
        { type: 'number', position: 'left', title: { text: 'Humidity (%)' } },
      ],
    };
  }

  loadSensorData() {
    // Replace with actual logic to load data from your text file
    return [
      { timestamp: new Date('2024-11-01T00:00:00Z'), temperature: 20, humidity: 50 },
      { timestamp: new Date('2024-11-01T01:00:00Z'), temperature: 21, humidity: 52 },
      // Add more sample data or load dynamically
    ];
  }
}


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
      { timestamp: new Date('2024-11-01T00:01:00Z'), temperature: 21, humidity: 51 },
      { timestamp: new Date('2024-11-01T00:02:00Z'), temperature: 19, humidity: 52 },
      { timestamp: new Date('2024-11-01T00:03:00Z'), temperature: 15, humidity: 63 },
      { timestamp: new Date('2024-11-01T00:04:00Z'), temperature: 24, humidity: 54 },
      { timestamp: new Date('2024-11-01T00:05:00Z'), temperature: 25, humidity: 45 },
      { timestamp: new Date('2024-11-01T00:06:00Z'), temperature: 26, humidity: 56 },
      { timestamp: new Date('2024-11-01T00:07:00Z'), temperature: 20, humidity: 57 },
      { timestamp: new Date('2024-11-01T00:08:00Z'), temperature: 28, humidity: 58 },
      { timestamp: new Date('2024-11-01T00:09:00Z'), temperature: 29, humidity: 59 },
      { timestamp: new Date('2024-11-01T00:10:00Z'), temperature: 20, humidity: 60 },


      // Add more sample data or load dynamically
    ];
  }
}


import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-compost-bin-dashboard',
  templateUrl: './compost-bin-dashboard.component.html',
  styleUrls: ['./compost-bin-dashboard.component.scss']
})
export class CompostBinDashboardComponent implements OnInit {

  private map: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    // Check if map container is available
    if (!this.map) {
      this.map = L.map('map').setView([40.4277, -86.9116], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      L.marker([40.427773039867596, -86.9116076809897]).addTo(this.map)
        .bindPopup('Purdue Polytechnic Institute')
        .openPopup();
    }
  }
}

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
      // Preparing the marker icon for the map
      var purdueIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/444px-Purdue_Boilermakers_logo.svg.png?20200422051240',

        iconSize:     [38, 30], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      this.map = L.map('map').setView([40.427, -86.911], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      L.marker([40.427773039867596, -86.9116076809897], {icon:purdueIcon}).addTo(this.map)
        .bindPopup('Purdue Polytechnic Institute')
        .openPopup();
    }
  }
}

import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-map-prueba',
  templateUrl: './map-prueba.component.html',
  styleUrl: './map-prueba.component.css'
})
export class MapPruebaComponent implements AfterViewInit {
  map: any;
  markers: any[] = []; // Array para los marcadores

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) { // Verifica que el elemento no sea null
      const mapOptions = {
        center: { lat: -34.397, lng: 150.644 }, // Coordenadas iniciales
        zoom: 8
      };
      this.map = new google.maps.Map(mapElement, mapOptions);

      const marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: this.map
      });

      this.markers.push(marker);

      // Evento para agregar marcadores
      this.map.addListener('click', (event: any) => {
        this.addMarker(event.latLng);
      });
    } else {
      console.error('No se pudo encontrar el elemento del mapa');
    }
  }

  addMarker(location: any) {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
    this.markers.push(marker); // Agregar el marcador al array
  }
}
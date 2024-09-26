import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import HabitacionesUbicacion from '../../interfaces/habitacionesUbicacion';
import { HabitacionesService } from '../../services/habitaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, AfterViewInit {
  // maps: GoogleMap | null = null;
  // isLoading = false;


  idHabitacion: string | null = '';

  habitacionUbicacion: HabitacionesUbicacion = {
    idHabitacion: 0,
    idHotel: 0,
    nombre: '',
    nombreHotel: '',
    ciudad: '',
    ciudadLatitud: 0,
    ciudadLongitud: 0,
    pais: '',
    paisLatitud: 0,
    paisLongitud: 0
  };

  // latitud: number = 40.73061;
  // longitud: number = -74.006;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idHabitacion = this.route.snapshot.paramMap.get('idHabitacion');
    this.getHabitacionUbicacion();
  }


  map: any;
  markers: any[] = []; // Array para los marcadores

  ngAfterViewInit() {
    // this.initMap();
  }

  initMap(latitud: number, longitud: number) {
    const mapElement = document.getElementById('map');
    if (mapElement) { // Verifica que el elemento no sea null
      const mapOptions = {
        center: { lat: latitud, lng: longitud }, // Coordenadas iniciales
        zoom: 14
      };
      this.map = new google.maps.Map(mapElement, mapOptions);

      const marker = new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
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
  // addMarker(location: any) {
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map
  //   });
  //   this.markers.push(marker); // Agregar el marcador al array
  // }

  async getHabitacionUbicacion() {
    // this.isLoading = true;
    try{
      const resultado = await HabitacionesService.getHabitacionUbicacion(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.habitacionUbicacion = resultado.data[0];
        if (this.habitacionUbicacion.ciudadLatitud && this.habitacionUbicacion.ciudadLongitud) {
          // this.center = {
          //   lat: Number(this.habitacionUbicacion.ciudadLatitud),
          //   lng: Number(this.habitacionUbicacion.ciudadLongitud)
          // };
          this.initMap(Number(this.habitacionUbicacion.ciudadLatitud), Number(this.habitacionUbicacion.ciudadLongitud));
          
        } else {
          console.error('Coordenadas inválidas');
          // Mostrar un mensaje de error al usuario
        }

        console.log(resultado.data[0]);
      }
    } catch (error) {
      console.log(error);
    } 
    // finally {
    //   this.isLoading = false;
    // }
  }






  // display: any;
  // center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  // // center: google.maps.LatLngLiteral = {
  // //     lat: Number(this.habitacionUbicacion.ciudadLatitud),
  // //     lng: Number(this.habitacionUbicacion.ciudadLongitud)
  // // };
  // zoom = 6;

  // /*------------------------------------------
  // moveMap()
  // --------------------------------------------*/
  // // moveMap(event: google.maps.MapMouseEvent) {
  // //     if (event.latLng != null) this.center = (event.latLng.toJSON());
  // // }

  // // /*------------------------------------------
  // // move()
  // // --------------------------------------------*/
  // // move(event: google.maps.MapMouseEvent) {
  // //     if (event.latLng != null) this.display = event.latLng.toJSON();
  // // }


  // // markerOptions: google.maps.MarkerOptions = {
  // //   position: { lat: this.habitacionUbicacion.ciudadLatitud, lng: this.habitacionUbicacion.ciudadLongitud },
  // //   map: this.maps 
  // // };

  // // marker = new google.maps.Marker(this.markerOptions);




  
  
}

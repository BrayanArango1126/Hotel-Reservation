import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import HabitacionesDetails from '../../../../../interfaces/habitacionesDetails';
import { HabitacionesService } from '../../../../../services/habitaciones.service';
import Servicios from '../../../../../interfaces/servicios';
import { ServiciosService } from '../../../../../services/services.service';

@Component({
  selector: 'app-services-details-rooms',
  templateUrl: './services-details-rooms.component.html',
  styleUrl: './services-details-rooms.component.css'
})
export class ServicesDetailsRoomsComponent implements OnInit{

  idHabitacion: string | null = '';
  habitacion: HabitacionesDetails ={
    idHabitacion: 0,
    idHotel: 0,
    nombre: '',
    descripcion: '',
    capacidad: 0,
    disponibilidad: 0,
    cantidadCamas: 0,
    calificacion: 0,
    cantidadBanos: 0,
    tipoCama: '',
    cantidadHabitaciones: 0,
    hayCocina: 0,
    precio: 0,
    nombreHotel: '',
    url: '',
    idServicio: 0,
    nombreServicio: '',
    icon: ''
  };

  listServices: Servicios[] = [];

  minDate = new Date();

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.idHabitacion = this.route.snapshot.paramMap.get('idHabitacion');
    this.getRoom();
    this.getServices();
  }

  async getRoom() {
    try{
      const resultado = await HabitacionesService.getHabitacionById(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.habitacion = resultado.data[0];
      }
    }catch{
      console.log('Error al obtener la habitacion');
    }
  }

  async getServices() {
    try{
      const resultado = await ServiciosService.getServiciosById(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.listServices = resultado.data;
      }
    }catch{
      console.log('Error al obtener los servicios');
    }
  }
}

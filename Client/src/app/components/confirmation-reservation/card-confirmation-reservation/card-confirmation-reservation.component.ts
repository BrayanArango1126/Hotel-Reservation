import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Habitaciones from '../../../interfaces/habitaciones';
import { HabitacionesService } from '../../../services/habitaciones.service';

@Component({
  selector: 'app-card-confirmation-reservation',
  templateUrl: './card-confirmation-reservation.component.html',
  styleUrl: './card-confirmation-reservation.component.css'
})
export class CardConfirmationReservationComponent implements OnInit{

  idHabitacion:string | null = '';

  habitacion: Habitaciones = {
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
    url: ''
  }

  fechasReservadas = {
    fechaInicio: '',
    horaInicio: '',
    fechaFin: '',
    horaFin: '',
    cantidadDias: 0,
    totalDescuento: 0,
    total: 0
  };


  constructor(private route:ActivatedRoute, private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    this.fechasReservadas = navigation?.extras.state?.['reservas'];
    console.log('fechas',navigation?.extras.state?.['reservas']);
   }

  ngOnInit(): void {
    this.idHabitacion = this.route.snapshot.paramMap.get('idHabitacion');
    this.getRoom();
  }

  async getRoom() {
    try{
      const resultado = await HabitacionesService.getHabitacionById(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.habitacion = resultado.data[0];
        // console.log(resultado.data[0]);
      }
    }catch(error){
      console.log(error);
    }
  }


}

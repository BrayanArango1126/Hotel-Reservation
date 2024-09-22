import { Component, Inject, OnInit } from '@angular/core';
import HabitacionesDetails from '../../../../../interfaces/habitacionesDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionesService } from '../../../../../services/habitaciones.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-card-reserve-rooms',
  templateUrl: './card-reserve-rooms.component.html',
  styleUrl: './card-reserve-rooms.component.css'
})
export class CardReserveRoomsComponent implements OnInit{

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

  minDate = new Date();

  minDateFechaFin = new Date();

  formReservar:FormGroup;

  descuento:number = 0.2;

  totalDescuento:number = 0;

  fechaSeleccionada:Date = new Date();
  fechaSeleccionadaFin:Date = new Date();

  fechasReservadas:object = {
    fechaInicio: '',
    horaInicio: '',
    fechaFin: '',
    horaFin: '',
    cantidadDias: 0,
    totalDescuento: 0,
    total: 0
  };

  cantidadDias:number = 0;

  constructor(
    private route: ActivatedRoute,
    private routes: Router
  ){
    this.formReservar = new FormGroup({
      fechaInicio: new FormControl('', Validators.required),
      horaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      horaFin: new FormControl('', Validators.required)
    });
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
      }
    }catch{
      console.log('Error al obtener la habitacion');
    }
  }

  reservarHabitacion(idHabitacion: number){
    // this.fechasReservadas = this.formReservar.value;
    this.fechasReservadas = {
      fechaInicio: moment(this.fechaSeleccionada).format('YYYY-MM-DD'),
      horaInicio: this.formReservar.value.horaInicio,
      fechaFin: moment(this.fechaSeleccionadaFin).format('YYYY-MM-DD'),
      horaFin: this.formReservar.value.horaFin,
      cantidadDias: this.cantidadDias,
      totalDescuento: this.totalDescuento,
      total: (this.habitacion.precio * this.cantidadDias) - this.totalDescuento
    }
      console.log(this.fechasReservadas);
    this.routes.navigate([`/rooms/reservations/${idHabitacion}`], {state: {reservas: this.fechasReservadas}});
  }

  calcularDiasEntreFechas(fechaInicial:string, fechaFinal:string) {
    const diferencia = moment(fechaFinal).diff(moment(fechaInicial), 'days');
    this.cantidadDias = diferencia;
  }

  onDateChange(event: any){
    this.fechaSeleccionada = event.value;
    this.minDateFechaFin = this.fechaSeleccionada;
    this.fechaSeleccionadaFin = this.fechaSeleccionada;
    const fechaFormateada = moment(this.fechaSeleccionada).format('YYYY-MM-DD');
    const fechaFormateadaFin = moment(this.fechaSeleccionadaFin).format('YYYY-MM-DD');
    this.calcularDiasEntreFechas(fechaFormateada, fechaFormateadaFin);
    this.totalDescuento = (this.habitacion.precio * this.cantidadDias) * this.descuento;
    console.log(this.cantidadDias);
  }
  onDateChangeFin(event: any){
    this.fechaSeleccionadaFin = event.value;
    const fechaFormateada = moment(this.fechaSeleccionadaFin).format('YYYY-MM-DD');
    const fechaFormateadaInicio = moment(this.fechaSeleccionada).format('YYYY-MM-DD');
    this.calcularDiasEntreFechas(fechaFormateadaInicio, fechaFormateada);
    this.totalDescuento = (this.habitacion.precio * this.cantidadDias) * this.descuento;
    console.log(this.cantidadDias);
  }

}

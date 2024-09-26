import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Reservas from '../../../../interfaces/reservas';
import { ReservasService } from '../../../../services/reservas.service';
import { HabitacionesService } from '../../../../services/habitaciones.service';
import Habitaciones from '../../../../interfaces/habitaciones';

@Component({
  selector: 'app-reservation-room-credit',
  templateUrl: './reservation-room-credit.component.html',
  styleUrl: './reservation-room-credit.component.css'
})
export class ReservationRoomCreditComponent implements OnInit{

  idHabitacion: string = '';
  idUsuario: number = 0;



  fechasReservadas = {
    fechaInicio: '',
    horaInicio: '',
    fechaFin: '',
    horaFin: '',
    cantidadDias: 0,
    totalDescuento: 0,
    total: 0
  };

  reserva:Reservas = {
    fecha_inicio: '',
    hora_inicio: '',
    fecha_fin: '',
    hora_fin: '',
    total: 0,
    idHotel: 0,
    idHabitacion: 0,
    idUsuario: 0
  };

  habitacion:Habitaciones = {
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
  };


  constructor(private route:ActivatedRoute, private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    this.fechasReservadas = navigation?.extras.state?.['reservas'];
    console.log('fechas',this.fechasReservadas);
   }

  ngOnInit(): void {
    this.idHabitacion = this.route.snapshot.paramMap.get('idHabitacion') || '';
    this.idUsuario = localStorage.getItem('idUsuario') ? Number(localStorage.getItem('idUsuario')) : 0;
    this.getRoom();
  }

  onSubmit(){
    this.reserva.fecha_inicio = this.fechasReservadas.fechaInicio;
    this.reserva.hora_inicio = this.fechasReservadas.horaInicio;
    this.reserva.fecha_fin = this.fechasReservadas.fechaFin;
    this.reserva.hora_fin = this.fechasReservadas.horaFin;
    this.reserva.total = this.fechasReservadas.total;
    this.reserva.idHotel = this.habitacion.idHotel;
    this.reserva.idHabitacion = Number(this.idHabitacion);
    this.reserva.idUsuario = this.idUsuario;
    console.log(this.reserva);

    this.createReseva();
  }

  async createReseva(){
    try{
      const resultado = await ReservasService.createReserva(this.reserva).then((res) => {
        if(res.status === 200){
          console.log(res);
          this.router.navigate([`/rooms/confirmation-reservation/${Number(this.idHabitacion)}`], {state: {reservas: this.fechasReservadas}});
        }else{
          console.log('Error al crear la reserva');
        }
      });
    }catch{
      console.log('Error al crear la reserva');
    }
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


}

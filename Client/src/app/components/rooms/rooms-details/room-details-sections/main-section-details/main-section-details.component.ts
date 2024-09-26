import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionesService } from '../../../../../services/habitaciones.service';
import HabitacionesDetails from '../../../../../interfaces/habitacionesDetails';
import FotosRoom from '../../../../../interfaces/fotosRoom';

@Component({
  selector: 'app-main-section-details',
  templateUrl: './main-section-details.component.html',
  styleUrl: './main-section-details.component.css'
})
export class MainSectionDetailsComponent implements OnInit{

  idUsuario: string | null = '';
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

  imagenesHabitacion: FotosRoom[] = [];
  constructor(private route: ActivatedRoute, private router:Router) {
    
  }

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('idUsuario');
    this.idHabitacion = this.route.snapshot.paramMap.get('idHabitacion');
    this.getRoomDetails();
    this.getFotosHabitacion();
  }

  async getRoomDetails(){
    try{
      const resultado = await HabitacionesService.getHabitacionById(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.habitacion = resultado.data[0];
      }
    }catch{
      console.log('Error al obtener la lista de habitaciones');
    }
  }

  async getFotosHabitacion(){
    try{
      const resultado = await HabitacionesService.getHabitacionFotosById(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.imagenesHabitacion = resultado.data;
      }
    }catch{
      console.log('Error al obtener las fotos de la habitacion');
    }
  }

  saveFavorite(idHabitacion: number){
    if(this.idUsuario == '0' || this.idUsuario == null){
      alert('Debes iniciar sesion para guardar la habitacion en favoritos');
      this.router.navigate(['/login']);
      return;
    }else{
      try{
        const reponse = HabitacionesService.addHabitacionFavorite(Number(this.idUsuario), idHabitacion);
        alert('Habitacion guardada en favoritos');
      }catch{
        console.log('Error al guardar la habitacion en favoritos');
      }
    }
  }
}

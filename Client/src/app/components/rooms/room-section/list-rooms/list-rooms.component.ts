import { Component, OnInit } from '@angular/core';
import Hotel from '../../../../interfaces/hotel';
import { HotelesService } from '../../../../services/hoteles.service';
import Habitaciones from '../../../../interfaces/habitaciones';
import { HabitacionesService } from '../../../../services/habitaciones.service';
import { Router } from '@angular/router';
import { FiltroService } from '../../../../services/filtro.service';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrl: './list-rooms.component.css'
})
export class ListRoomsComponent implements OnInit{

  idUsuario: string | null = '';

  p: number = 1;
  ListHotels: Hotel[] = [];

  listRooms: Habitaciones[] = [];
  constructor(private router:Router, private filtroService:FiltroService) {
    
  }

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('idUsuario');
    this.getHotelsList();
    this.filtroService.filtros$.subscribe(filtros => {
      this.getRoomsListFilters(filtros);
    })
  }

  verDetalles(idHabitacion: number){
    this.router.navigate([`/rooms/details/${idHabitacion}`]);
  }

  // async getRoomsList() {
  //   try{
  //     const resultado = await HabitacionesService.getHabitacionesList();
  //     if(resultado.status === 200){
  //       this.listRooms = resultado.data;
  //     }
  //   }catch{
  //     console.log('Error al obtener la lista de habitaciones');
  //   }
  // }

  async getRoomsListFilters(filtros: any) {
    try{
      const resultado = await HabitacionesService.getHabitacionesListFiltros(filtros);
      if(resultado.status === 200){
        this.listRooms = resultado.data;
      }
    }catch{
      console.log('Error al obtener la lista de habitaciones');
    }
  }

  async getHotelsList() {
    try{
      const resultado = await HotelesService.getHotelesList();
      if(resultado.status === 200){
        this.ListHotels = resultado.data;
      }
    }catch{
      console.log('Error al obtener la lista de hoteles');
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

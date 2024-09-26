import { Component, OnInit } from '@angular/core';
import Hotel from '../../../interfaces/hotel';
import Habitaciones from '../../../interfaces/habitaciones';
import { Router } from '@angular/router';
import { HabitacionesService } from '../../../services/habitaciones.service';

@Component({
  selector: 'app-favorites-rooms',
  templateUrl: './favorites-rooms.component.html',
  styleUrl: './favorites-rooms.component.css'
})
export class FavoritesRoomsComponent implements OnInit{


  idUsuario: string | null = '';
  p: number = 1;
  ListHotels: Hotel[] = [];

  listRooms: Habitaciones[] = [];
  constructor(private router:Router) {

  }

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('idUsuario');
    this.getFavoritesRooms();
  }

  async getFavoritesRooms() {
    try{
      const resultado = await HabitacionesService.getFavoriteHabitacionesByUser(Number(this.idUsuario));
      if(resultado.status === 200){
        this.listRooms = resultado.data;
      }
    }catch{
      console.log('Error al obtener la lista de habitaciones');
    }
  }

  verDetalles(idHabitacion: number){
    this.router.navigate([`/rooms/details/${idHabitacion}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import Hotel from '../../../../interfaces/hotel';
import { HotelesService } from '../../../../services/hoteles.service';
import Habitaciones from '../../../../interfaces/habitaciones';
import { HabitacionesService } from '../../../../services/habitaciones.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrl: './list-rooms.component.css'
})
export class ListRoomsComponent implements OnInit{

  p: number = 1;
  ListHotels: Hotel[] = [];

  listRooms: Habitaciones[] = [];
  constructor() {
    
  }

  ngOnInit(): void {
    this.getHotelsList();
    this.getRoomsList();
  }

  async getRoomsList() {
    try{
      const resultado = await HabitacionesService.getHabitacionesList();
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
}

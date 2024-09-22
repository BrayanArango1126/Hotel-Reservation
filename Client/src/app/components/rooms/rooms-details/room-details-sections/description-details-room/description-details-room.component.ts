import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitacionesService } from '../../../../../services/habitaciones.service';
import HabitacionesDetails from '../../../../../interfaces/habitacionesDetails';

@Component({
  selector: 'app-description-details-room',
  templateUrl: './description-details-room.component.html',
  styleUrl: './description-details-room.component.css'
})
export class DescriptionDetailsRoomComponent implements OnInit{

  idHabitacion: string | null = '';
  habitacion: HabitacionesDetails | undefined;

  constructor(
    private route: ActivatedRoute
  ){}

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
}

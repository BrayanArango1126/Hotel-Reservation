import { Component, OnInit } from '@angular/core';
import Habitaciones from '../../../../interfaces/habitaciones';
import { HabitacionesService } from '../../../../services/habitaciones.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-reserve',
  templateUrl: './card-reserve.component.html',
  styleUrl: './card-reserve.component.css'
})
export class CardReserveComponent implements OnInit {

  p: number = 1;
  idHotel:string | null = '';
  listHabitaciones:Habitaciones[] = [];
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.paramMap.get('idHotel');
    this.getHabitaciones();
  }

  async getHabitaciones(){
    try{
      const response = await HabitacionesService.getHabitacionesByHotel(Number(this.idHotel));
      if(response.status === 200){
        this.listHabitaciones = response.data;
      }
    }catch(error){
      console.error(error);
    }
  }

  verDetallesHabitacion(idHabitacion:number){
    this.router.navigate([`/rooms/details/${idHabitacion}`]);
  }

}

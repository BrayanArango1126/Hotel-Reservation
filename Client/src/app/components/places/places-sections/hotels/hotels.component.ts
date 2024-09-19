import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../../../services/hoteles.service';
import Hotel from '../../../../interfaces/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  ListHotels: Hotel[] = [];
  constructor() {
    
  }

  ngOnInit(): void {
    this.getHotelsList();
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

import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../../../services/hoteles.service';
import Hotel from '../../../../interfaces/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  p: number = 1;
  ListHotels: Hotel[] = [];
  constructor() {
    
  }

  ngOnInit(): void {
    this.getHotelsList();
    this.getMatRandomNumber();
  }

  getMatRandomNumber(){
    return Math.floor(Math.random() * 401) + 100;
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

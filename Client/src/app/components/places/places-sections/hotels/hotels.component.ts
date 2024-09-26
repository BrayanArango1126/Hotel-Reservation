import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../../../services/hoteles.service';
import Hotel from '../../../../interfaces/hotel';
import { Router } from '@angular/router';
import { FiltroHotelesService } from '../../../../services/filtroHoteles.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  p: number = 1;
  ListHotels: Hotel[] = [];
  constructor(private router:Router, private filtroService:FiltroHotelesService) {
    
  }

  ngOnInit(): void {
    // this.getHotelsList();
    this.filtroService.filtros$.subscribe(filtros => {
      this.getHotelsFilterList(filtros);
    })
  }

  // async getHotelsList() {
  //   try{
  //     const resultado = await HotelesService.getHotelesList();
  //     if(resultado.status === 200){
  //       this.ListHotels = resultado.data;
  //     }
  //   }catch{
  //     console.log('Error al obtener la lista de hoteles');
  //   }
  // }
  
  async getHotelsFilterList(filters: any) {
    try{
      const resultado = await HotelesService.getHotelesFilterList(filters);
      if(resultado.status === 200){
        this.ListHotels = resultado.data;
      }
    }catch{
      console.log('Error al obtener la lista de hoteles');
    }
  }


  verDetallesHotel(idHotel: number){
    this.router.navigate([`/places/details/${idHotel}`]);
  }
}

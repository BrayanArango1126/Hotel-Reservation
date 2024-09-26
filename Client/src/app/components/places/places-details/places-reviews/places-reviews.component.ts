import { Component, OnInit } from '@angular/core';
import ResenasHotel from '../../../../interfaces/resenasHotel';
import { ResenasService } from '../../../../services/resenas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places-reviews',
  templateUrl: './places-reviews.component.html',
  styleUrl: './places-reviews.component.css'
})
export class PlacesReviewsComponent implements OnInit {

  idHotel: string = '';

  listResenas: ResenasHotel[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.paramMap.get('idHotel') || '';
    this.getReviewsHoteL();
  }

  async getReviewsHoteL(){
    try{
      const resultado = await ResenasService.getResenasHotelById(Number(this.idHotel));
      if(resultado.status === 200){
        this.listResenas = resultado.data;
      }
    }catch{
      console.log('Error al obtener las reseñas');
    }
  }

}

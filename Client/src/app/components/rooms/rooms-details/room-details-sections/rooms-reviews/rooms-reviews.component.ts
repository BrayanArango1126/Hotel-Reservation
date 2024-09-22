import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Resenas from '../../../../../interfaces/resenas';
import { ResenasService } from '../../../../../services/resenas.service';

@Component({
  selector: 'app-rooms-reviews',
  templateUrl: './rooms-reviews.component.html',
  styleUrl: './rooms-reviews.component.css'
})
export class RoomsReviewsComponent implements OnInit {

  idHabitacion: string = '';

  listResenas: Resenas[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idHabitacion = this.route.snapshot.paramMap.get('idHabitacion') || '';
    this.getReviews();
  }

  async getReviews(){
    try{
      const resultado = await ResenasService.getResenasById(Number(this.idHabitacion));
      if(resultado.status === 200){
        this.listResenas = resultado.data;
      }
    }catch{
      console.log('Error al obtener las reseñas');
    }
  }

}

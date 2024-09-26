import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Actividades from '../../../../interfaces/actividades';
import { ActividadesService } from '../../../../services/actividades.service';
import moment from 'moment';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent implements OnInit {
  
  idHotel:string | null = '';

  listActividades:Actividades[] = [];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idHotel = this.route.snapshot.paramMap.get('idHotel');
    this.getActividades();
  }

  async getActividades(){
    try{
      const response = await ActividadesService.getActividadesListById(Number(this.idHotel));
      if(response.status === 200){
        this.listActividades = response.data;

        this.listActividades.map((actividad) => {
          actividad.fecha_inicio = moment(actividad.fecha_inicio).format('YYYY-MM-DD');
          actividad.fecha_fin = moment(actividad.fecha_fin).format('YYYY-MM-DD');
        });
      }
    }catch(error){
      console.error(error);
    }
  }
}

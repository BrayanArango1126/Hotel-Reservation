import { Component, OnInit } from '@angular/core';
import MejoresCiudades from '../../../interfaces/mejoresCiudades';
import { CiudadesService } from '../../../services/ciudades.service';

@Component({
  selector: 'app-places-section',
  templateUrl: './places-section.component.html',
  styleUrl: './places-section.component.css',
})
export class PlacesSectionComponent implements OnInit{ 

  listMejoresCiudades: MejoresCiudades[] = [];

  constructor() {
  
  }
  ngOnInit(): void {
    this.getMejoresCiudadesList();
  }

  async getMejoresCiudadesList() {
    try{
      const resultado = await CiudadesService.getMejoresCiudadesList();
      if(resultado.status === 200){
        this.listMejoresCiudades = resultado.data;
      }
    }catch{
      console.log('Error al obtener la lista de mejores ciudades');
    }
  }
}
 
import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../../../services/filtro.service';
import CategoriasHoteles from '../../../../interfaces/categoriasHoteles';
import { CategoriasHotelesService } from '../../../../services/categoriasHoteles.service';
import Ciudades from '../../../../interfaces/ciudades';
import { CiudadesService } from '../../../../services/ciudades.service';
import { FormGroup, FormControlName, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-rooms',
  templateUrl: './filter-rooms.component.html',
  styleUrl: './filter-rooms.component.css'
})
export class FilterRoomsComponent implements OnInit{

  precioMin:number | undefined;
  precioMax:number | undefined;
  idCiudad:number | undefined;
  idCategoriaHotel:number | undefined;
  calificacion:number | undefined;


  listCategoriaHotel:CategoriasHoteles[] = [];

  listCiudades:Ciudades[] = [];

  formFilter:FormGroup;

  constructor(private fb: FormBuilder, private filtroService:FiltroService) {
    this.formFilter = this.fb.group({
      precioMin: [''],
      precioMax: [''],
      idCategoriaHotel: [''],
      idCiudad: [''],
      calificacion:['']
    });
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getCiudades();
  }

  manejarEnvioFiltro(){
    // this.filtroService.actualizarFiltros(this.formFilter.value);
    // console.log(this.formFilter.value);

    const filtros = this.formFilter.value;

    // Crear un nuevo objeto filtrando las propiedades vacías
    const filtrosFiltrados = Object.keys(filtros).reduce((acc:any, key:any) => {
      if (filtros[key] !== '' && filtros[key] !== null && filtros[key] !== undefined) {
        acc[key] = filtros[key];
      }
      return acc;
    }, {});

    // console.log(filtrosFiltrados);
    this.filtroService.actualizarFiltros(filtrosFiltrados);
  }

  async getCategorias(){
    try{
      const response = await CategoriasHotelesService.getCategoriasHotelesList();
      if(response.status === 200){
        this.listCategoriaHotel = response.data;
      }
    }catch(error){
      console.error(error);
    }
  }

  async getCiudades(){
    try{
      const response = await CiudadesService.getCiudadesList();
      if(response.status === 200){
        this.listCiudades = response.data;
      }
    }catch(error){
      console.error(error);
    }
  }


  eliminarFiltros(){
    this.formFilter.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FiltroHotelesService } from '../../../../services/filtroHoteles.service';
import { CategoriasHotelesService } from '../../../../services/categoriasHoteles.service';
import { CiudadesService } from '../../../../services/ciudades.service';
import CategoriasHoteles from '../../../../interfaces/categoriasHoteles';
import Ciudades from '../../../../interfaces/ciudades';
import Paises from '../../../../interfaces/paises';
import { PaisesService } from '../../../../services/paises.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit{

  listaCategoriaHotel:CategoriasHoteles[] = [];
  listCiudades:Ciudades[] = [];
  listPaises:Paises[] = [];

  formFilter:FormGroup;

  constructor(private fb: FormBuilder, private filtroService:FiltroHotelesService) {
    this.formFilter = this.fb.group({
      generoPermitido: [''],
      idPais: [''],
      idCategoriaHotel: [''],
      idCiudad: [''],
      estrellas:['']
    });
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getCiudades();
    this.getPaises();
  }

  manejarEnvioFiltro(){
    const filtros = this.formFilter.value;

    // Crear un nuevo objeto filtrando las propiedades vacías
    const filtrosFiltrados = Object.keys(filtros).reduce((acc:any, key:any) => {
      if (filtros[key] !== '' && filtros[key] !== null && filtros[key] !== undefined) {
        acc[key] = filtros[key];
      }
      return acc;
    }, {});

    this.filtroService.actualizarFiltros(filtrosFiltrados);
  }

  async getCategorias(){
    try{
      const response = await CategoriasHotelesService.getCategoriasHotelesList();
      if(response.status === 200){
        this.listaCategoriaHotel = response.data;
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

  async getPaises(){
    try{
      const response = await PaisesService.getPaisesList();
      if(response.status === 200){
        this.listPaises = response.data;
      }
    }catch(error){
      console.error(error);
    }
  }


  eliminarFiltros(){
    this.formFilter.reset();
  }
}

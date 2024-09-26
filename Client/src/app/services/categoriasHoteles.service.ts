import axios from 'axios';
import { environment } from '../../environments/environment';

export const CategoriasHotelesService = {
  async getCategoriasHotelesList() {
    return axios.get(`${environment.api}/categorias_hoteles/list`);
  },
  async getCategoriasHotelesListById(idCategoriaHotel: number) {
    return axios.get(`${environment.api}/categorias_hoteles/list/${idCategoriaHotel}`);
  }
};
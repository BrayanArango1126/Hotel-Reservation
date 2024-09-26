import axios from 'axios';
import { environment } from '../../environments/environment';

export const ActividadesService = {
  async getActividadesList() {
    return axios.get(`${environment.api}/actividades/list`);
  },
  async getActividadesListById(idHotel: number) {
    return axios.get(`${environment.api}/actividades/list/${idHotel}`);
  }
};
import axios from 'axios';
import { environment } from '../../environments/environment';
import Servicios from '../interfaces/servicios';

export const ServiciosService = {
  async getServiciosList() {
    return axios.get(`${environment.api}/servicios/list`);
  },
  async getServiciosById(idServicio: number) {
    return axios.get(`${environment.api}/servicios/list/${idServicio}`);
  },
  async getServiciosByIdHoteles(idHotel: number) {
    return axios.get(`${environment.api}/servicios/list/${idHotel}`);
  }
};
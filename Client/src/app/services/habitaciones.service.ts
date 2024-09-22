import axios from 'axios';
import { environment } from '../../environments/environment';
import Habitaciones from '../interfaces/habitaciones';

export const HabitacionesService = {
  async getHabitacionesList() {
    return axios.get(`${environment.api}/habitaciones/list`);
  },
  async getHabitacionById(idHabitacion: number) {
    return axios.get(`${environment.api}/habitaciones/room/${idHabitacion}`);
  },
  async getHabitacionFotosById(idHabitacion: number) {
    return axios.get(`${environment.api}/habitaciones/fotos/${idHabitacion}`);
  }
};
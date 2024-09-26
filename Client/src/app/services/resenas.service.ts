import axios from 'axios';
import { environment } from '../../environments/environment';
import Resenas from '../interfaces/resenas';

export const ResenasService = {
  async getResenasList() {
    return axios.get(`${environment.api}/resenas/list`);
  },
  async getResenasById(idHabitacion: number) {
    return axios.get(`${environment.api}/resenas/list/${idHabitacion}`);
  },
  async getResenasHotelById(idHotel: number) {
    return axios.get(`${environment.api}/resenas/list/hotel/${idHotel}`);
  }
};
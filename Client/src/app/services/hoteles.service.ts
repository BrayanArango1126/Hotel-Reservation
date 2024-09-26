import axios from 'axios';
import { environment } from '../../environments/environment';
import Hotel from '../interfaces/hotel';

export const HotelesService = {
  async getHotelesList() {
    return axios.get(`${environment.api}/hoteles/list`);
  },
  async getHotelesFilterList(params: any) {
    return axios.get(`${environment.api}/hoteles/list/filtros`, {params: params});
  },
  async getHotelById(id: number) {
    return axios.get(`${environment.api}/hoteles/edit/${id}`);
  },
  async getHotelDetail(idHotel:number) {
    return axios.get(`${environment.api}/hoteles/details/${idHotel}`);
  }
};
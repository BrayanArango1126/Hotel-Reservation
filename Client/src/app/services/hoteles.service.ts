import axios from 'axios';
import { environment } from '../../environments/environment';
import Hotel from '../interfaces/hotel';

export const HotelesService = {
  async getHotelesList() {
    return axios.get(`${environment.api}/hoteles/list`);
  },
  async getHotelById(id: number) {
    return axios.get(`${environment.endpoint}/hoteles/edit/${id}`);
  },
  async createHotel(hotel: Hotel) {
    return axios.post(`${environment.endpoint}/hoteles/add`, hotel);
  },
  async editHotel(hotel: Hotel) {
    return axios.put(`${environment.endpoint}/hoteles/edit/${hotel.idHotel}`, hotel);
  },
  async deleteHotel(idHotel: number) {
    return axios.delete(`${environment.endpoint}/hoteles/delete/${idHotel}`);
  }
};
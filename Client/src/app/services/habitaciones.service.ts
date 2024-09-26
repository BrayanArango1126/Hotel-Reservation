import axios from 'axios';
import { environment } from '../../environments/environment';
import Habitaciones from '../interfaces/habitaciones';

export const HabitacionesService = {
  async getHabitacionesList() {
    return axios.get(`${environment.api}/habitaciones/list`);
  },
  async getHabitacionesListFiltros(filtro:any) {
    return axios.get(`${environment.api}/habitaciones/list/filtros`, {params: filtro});
  },
  async getHabitacionUbicacion(idHabitacion: number) {
    return axios.get(`${environment.api}/habitaciones/room/ubicacion/${idHabitacion}`);
  },
  async getHabitacionById(idHabitacion: number) {
    return axios.get(`${environment.api}/habitaciones/room/${idHabitacion}`);
  },
  async getHabitacionFotosById(idHabitacion: number) {
    return axios.get(`${environment.api}/habitaciones/fotos/${idHabitacion}`);
  },
  async getHabitacionesByHotel(idHotel: number) {
    return axios.get(`${environment.api}/habitaciones/list/hotel/${idHotel}`);
  },
  async getFavoriteHabitacionesByUser(idUsuario: number) {
    return axios.get(`${environment.api}/habitaciones/list/favorite/${idUsuario}`);
  },
  async addHabitacionFavorite(idUsuario: number, idHabitacion: number) {
    return axios.post(`${environment.api}/habitaciones/saveFavorite`, {idHabitacion, idUsuario});
  }
};
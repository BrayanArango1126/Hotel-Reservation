import axios from 'axios';
import { environment } from '../../environments/environment';
import Reservas from '../interfaces/reservas';

export const ReservasService = {
  async getReservasList() {
    return axios.get(`${environment.api}/reservaciones/list`);
  },
  async getReservasById(idHabitacion: number) {
    return axios.get(`${environment.api}/reservaciones/list/${idHabitacion}`);
  },
  async createReserva(reserva: Reservas) {
    return axios.post(`${environment.api}/reservaciones/create`, reserva);
  },
};
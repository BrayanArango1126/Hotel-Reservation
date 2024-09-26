import axios from 'axios';
import { environment } from '../../environments/environment';
import MejoresCiudades from '../interfaces/mejoresCiudades';

export const CiudadesService = {
  async getCiudadesList() {
    return axios.get(`${environment.api}/ciudades/list`);
  },
  async getCiudadesListById(id: number) {
    return axios.get(`${environment.api}/ciudades/edit/${id}`);
  },
  async getMejoresCiudadesList() {
    return axios.get(`${environment.api}/ciudades/list/better`);
  }
};
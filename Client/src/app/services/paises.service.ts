import axios from 'axios';
import { environment } from '../../environments/environment';

export const PaisesService = {
  async getPaisesList() {
    return axios.get(`${environment.api}/paises/list`);
  },
  async getPaisesListById(id: number) {
    return axios.get(`${environment.api}/paises/edit/${id}`);
  }
};
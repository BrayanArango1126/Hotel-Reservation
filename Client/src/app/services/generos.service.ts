import axios from 'axios';
import { environment } from '../../environments/environment';
import Generos from '../interfaces/generos';

export const GenerosService = {
  async getGenerosList() {
    return axios.get(`${environment.api}/generos/list`);
  },
  async getGenerosListById(id: number) {
    return axios.get(`${environment.api}/generos/edit/${id}`);
  }
};
import axios from 'axios';
import { environment } from '../../environments/environment';
import Users from '../interfaces/users';

export const UsuariosService = {
  async getUsuariosList() {
    return axios.get(`${environment.api}/usuarios/list`);
  },
  async getUsuariosById(idUsuario: number) {
    return axios.get(`${environment.api}/usuarios/${idUsuario}`);
  },
  async registerUsuario(usuario: Users) {
    return axios.post(`${environment.api}/usuarios/register`, usuario);
  },
  async loginUsuario(usuario: Users) {
    return axios.post(`${environment.api}/usuarios/login`, usuario);
  }
};
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Users from '../../../interfaces/users';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  idUsuario: number = 0;

  route = inject(Router);
  usuario: Users = {
    idUsuario: 0,
    nombres: '',
    apellidos: '',
    idGenero: 0,
    telefono: '',
    direccion: '',
    correo: '',
    contraseña: '',
    idCiudad: 0
  };

  userLogin: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.getSesionUser();
  }

  getSesionUser(){
    if(localStorage.getItem('token_sesion')){
      this.userLogin = true;
      this.getUsuarioById();
      this.idUsuario = Number(localStorage.getItem('idUsuario'));
    }else{
      this.userLogin = false;
    }
  }

  logOutSesion(){
    localStorage.removeItem('token_sesion');
    localStorage.removeItem('idUsuario');
    this.idUsuario = 0;
    this.userLogin = false;
    this.route.navigate(['/home']);
  }

  async getUsuarioById(){
    try{
      const idUsuario = localStorage.getItem('idUsuario');
      const respuesta = await UsuariosService.getUsuariosById(Number(idUsuario));
      if(respuesta.status == 200){
        this.usuario = respuesta.data[0];
        console.log(this.usuario);
      }else{
        console.log('Error al obtener el usuario');
      }
    }catch(error){
      console.error(error);
    }
  }

  irAFavoritos(){
    if(this.idUsuario == 0){
      alert('Debes iniciar sesion para ver tus favoritos');
      this.route.navigate(['/login']);
    }else{
      this.route.navigate([`/favorites/${this.idUsuario}`]);
    }
  }
}

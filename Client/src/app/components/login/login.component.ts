import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Sesion from '../../interfaces/sesion';
import Users from '../../interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  router= inject( Router);

  sesion: Sesion = {
    idUsuario: 0,
    correo: '',
    contraseña: ''
  };

  constructor(private route: ActivatedRoute) {
    this.loginForm = new FormGroup({
      correo: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.login();
  }

  async login(){
    this.sesion = this.loginForm.value;
    try{
      const respuesta = await UsuariosService.loginUsuario(this.loginForm.value);
      if(respuesta.status == 201){
        localStorage.setItem('token_sesion', respuesta.data.token);
        localStorage.setItem('idUsuario', respuesta.data.idUsuario);
        this.router.navigate(['/home']);

        // console.log(respuesta.data.token);
        // console.log('Inicio de sesión exitoso');
        // console.log(respuesta.data);
      }else{
        console.log('Error al iniciar sesión');
      }
    }catch(error){
      console.error(error);
    }
  }
}

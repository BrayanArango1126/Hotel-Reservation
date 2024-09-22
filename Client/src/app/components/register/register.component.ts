import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Users from '../../interfaces/users';
import Ciudades from '../../interfaces/ciudades';
import { CiudadesService } from '../../services/ciudades.service';
import Generos from '../../interfaces/generos';
import { GenerosService } from '../../services/generos.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  
  registerForm: FormGroup;

  users: Users = {
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

  ciudades: Ciudades[] = [];
  generos: Generos[] = [];

  constructor(private route: ActivatedRoute) {
    this.registerForm = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      idGenero: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
      idCiudad: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getCiudades();
    this.getGeneros();
  }

  onSubmit(){
    this.register();
  }

  async register(){
    this.users = this.registerForm.value;
    console.log(this.users);
    console.log(this.registerForm.value);
    try{
      const resultado = await UsuariosService.registerUsuario(this.users);
      if(resultado.status === 200){
        console.log('Usuario creado');
      }
    }catch{
      console.log('Error al crear el usuario');
    }
  }

  async getCiudades(){
    try{
      const resultado = await CiudadesService.getCiudadesList();
      if(resultado.status === 200){
        this.ciudades = resultado.data;
      }
    }catch{
      console.log('Error al obtener las ciudades');
    }
  }
  async getGeneros(){
    try{
      const resultado = await GenerosService.getGenerosList();
      if(resultado.status === 200){
        this.generos = resultado.data;
      }
    }catch{
      console.log('Error al obtener los generos');
    }
  }

}

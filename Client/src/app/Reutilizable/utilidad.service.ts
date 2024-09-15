import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../Interfaces/sesion';


@Injectable({
  providedIn: 'root'
})
export class UtilidadService {

  constructor(private _snackBar:MatSnackBar) { }

  MostarALerta(mensaje:string, tipo:string){
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    })
  }

  GuardarSesionUsuario(usuarioSesion:Sesion){
    localStorage.setItem("usuario", JSON.stringify(usuarioSesion));
  }

  ObtenerSesionUsuario(){
    const dataCadena = localStorage.getItem("usuario");
    const usuario = JSON.parse(dataCadena!) //con el signo de interrogacion indicamos de que esperamos si o si un valor no nulo
    return usuario;
  }

  eliminarSesionUsuario(){
    localStorage.removeItem("usuario");
  }

}

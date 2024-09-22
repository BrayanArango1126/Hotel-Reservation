import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


export const loginGuard = () => {
  const router = inject(Router);
  if(localStorage.getItem('token_sesion')){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroHotelesService {
  private filtrosSubject = new BehaviorSubject<any>({});
  filtros$ = this.filtrosSubject.asObservable();

  actualizarFiltros(nuevosFiltros: any) {
    this.filtrosSubject.next(nuevosFiltros);
  }
}
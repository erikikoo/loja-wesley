import { Injectable,EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  prioridade:any
  emiteEventoFiltro:EventEmitter<string> = new EventEmitter

  constructor() { }

  setPrioridade(p:any) {
    this.prioridade = p    
    this.emiteEventoFiltro.emit(this.prioridade)
  }


  

}

import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class DataContatoService {

  contato: Contato = new Contato();

  constructor() { }

  setContato(contato: Contato){
    this.contato = contato;
    this.getContato();
    
  }

  getContato(){
    console.log(this.contato)
    return this.contato;
    
  }

}

import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  listaContato: Contato [];

  constructor(private localStorage: LocalStorageService) { }

  saveContato(contato: Contato){
    this.localStorage.set(contato.id, contato);
  }

  getContato(id: string): Contato{
    return this.localStorage.get(id);
  }

  getContatoAll():Contato[]{
    return this.localStorage.keys().map(id => this.getContato(id));
  }

  deleteContato(contato: Contato){
    return this.localStorage.remove(contato.id);
  }

}

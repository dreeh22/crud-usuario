import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contato } from '../models/contato';
import { ContatoService } from '../services/contato.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataContatoService } from '../services/data-contato.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.css']
})
export class FormContatoComponent implements OnInit {

  contato: Contato;

  listaContato: Contato []=[];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contato = new Contato();
  }

  onSubmit(contato){

   this.contato = contato;

   if(this.contato.id == null){

    this.contato.id = new Date().getTime().toString();
    this.contatoService.saveContato(this.contato);
    //this.listaContato.push(contato);

   }else{
     this.contato.id = contato.id;
     this.contatoService.saveContato(this.contato);
   }

   this.listaContato = this.contatoService.getContatoAll();
   
   this.contato = new Contato();

  }

  editarContatoForm(contatoLista){
    this.contato = contatoLista;
  }

  deletarContatoLista(contatoDelete){
    this.contatoService.deleteContato(contatoDelete);
    this.listaContato = this.contatoService.getContatoAll();
  }

}

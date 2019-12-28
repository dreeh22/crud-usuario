import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/contato';
import { DataContatoService } from '../services/data-contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  contato: Contato;

  @Input() listaContatoRecebido;

  @Output() editContatoEvent = new EventEmitter();

  @Output() deletarContatoEvent = new EventEmitter();

  listaContatos: Contato [] = [];

  constructor(private contatoService: ContatoService,private  dataContatoService: DataContatoService) { }

  ngOnInit() {
    this.listaContatoRecebido = this.contatoService.getContatoAll();
  }

 edit(contato: Contato){
    this.editContatoEvent.emit(contato);
 }

 delet(contato: Contato){
   this.deletarContatoEvent.emit(contato);
 }

}

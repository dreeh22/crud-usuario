import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }

  public mensagem: string;

  setMSG(msg: string, tempo: number = 5000){
    this.mensagem = msg;
    setTimeout(() => {
      this.mensagem = null;
    }, tempo);
  }

  getMSG(){
    return this.mensagem;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContatoComponent } from './form-contato/form-contato.component';
import { FormsModule } from "@angular/forms";
import { LocalStorageModule } from "angular-2-local-storage";
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContatoService } from './services/contato.service';


@NgModule({
  declarations: [
    AppComponent,
    FormContatoComponent,
    ListaContatosComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocalStorageModule.forRoot({
      storageType: 'localStorage'
  }),
  BrowserAnimationsModule,
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

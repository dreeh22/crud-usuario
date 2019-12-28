import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContatoComponent } from './form-contato/form-contato.component';
import { FormsModule } from "@angular/forms";
import { LocalStorageModule } from "angular-2-local-storage";
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';

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
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

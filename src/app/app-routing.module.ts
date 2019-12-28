import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { FormContatoComponent } from './form-contato/form-contato.component';


const routes: Routes = [
  {path: '', redirectTo: '/cadastrar-contato', pathMatch: 'full'},
 //{path: 'contatos', component: ListaContatosComponent},
  {path: 'cadastrar-contato', component: FormContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

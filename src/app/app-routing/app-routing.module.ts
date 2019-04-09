import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Criamos a nossa rota para content
import { ContentComponent } from './../content/content.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';

//o nosso contante Routes, nada mais é do que um Array de objetos com os principais atributos “path” (caminho da rota) e “component” (component) que será renderizado quando o path for chamado.
const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

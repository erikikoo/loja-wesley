import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProducaoComponent } from './producao/producao.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [  
  { path: 'pedidos', component: PedidosComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'producao', component: ProducaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }


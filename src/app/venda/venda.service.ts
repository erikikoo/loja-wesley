import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private readonly API = `${environment.API}/pedidos`
  
  constructor(private http: HttpClient) { }
  
  getLastOS() {
    return this.http.get(`${this.API}/getLastOS`)
  }

  addPedido(numero_pedido:any, valor_venda:any, desconto:any, forma_pagamento:any ,cliente_id:any, pedido:any ,pedido_itens:any) {    
    
    return this.http.post(`${this.API}`, 
        { 
          numero_pedido,
          valor_venda,
          desconto,
          forma_pagamento,
          pedido,          
          cliente_id: cliente_id,          
          pedido_itens_attributes: pedido_itens,
        }).pipe(take(1));
    
  }
}

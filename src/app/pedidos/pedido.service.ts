import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = `${environment.API}/pedidos`

  constructor(private http: HttpClient) { }

  getAllPedidos() {
    return this.http.get(`${this.API}`).pipe(take(1))
  }

  showPedido(id:any) {
    return this.http.get(`${this.API}/${id}`)
  }

  addItemParaProdução(itens:any) {
    console.log(itens)
    return this.http.put(`${this.API}/produzir`, {pedido_itens: itens})
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private readonly API = `${environment.API}/clientes`

  constructor(private http: HttpClient) { }
  
  // getTeste() {
  //   return this.http.get(`${this.API}`).pipe(take(1));
  // }

  addCliente(cliente:any, pedido_itens?:any, desconto?:any) {
    
    // return this.http.post(`${this.API}`, {cliente: cliente, itens: pedido_itens, desconto_pedido: desconto}).pipe(take(1));
    return this.http.post(`${this.API}`, cliente).pipe(take(1));
  }
}

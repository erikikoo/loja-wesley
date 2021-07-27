import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConversaService {

  private readonly API = `${environment.API}/conversas`

  constructor(private http: HttpClient) { }

  addConversa(pedido_id:any, descricao:any) {
    return this.http.post(`${this.API}`, {pedido_id, descricao});
  }

}

import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedidos/pedido.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-producao',
  templateUrl: './producao.component.html',
  styleUrls: ['./producao.component.scss']
})
export class ProducaoComponent implements OnInit {

  pedidos_filtrados:any = []

  constructor(private pedidoService: PedidoService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe( (resp) => {
      
      this.pedidos_filtrados = resp        
    }, (err) => {
      this.notificationService.notify("Ops, Ocorreu um erro ao carregar os Pedidos!")
    })
  }

}

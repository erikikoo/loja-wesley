
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ConversaService } from '../conversa/conversa.service';
import { DefaultService } from '../default.service';
import { NotificationService } from '../shared/notification.service';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  // pedidos: any = [    
  //   {
  //     id: 1,
  //     titulo: "titulo 1",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     data_venda: "01/12/2020",
  //     data_entrega: "10/12/2020",
  //     vendedor: 'Cristiane',
  //     prioridade: 1,
  //     os: "0001",
  //     comentarios: [
  //       {
  //         descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  //         created_at: "08/09/2020",
  //         login: 'Erik',
  //         lido: false
  //       },
  //       {
  //         descricao: '122332432',
  //         created_at: "07/06/2020",
  //         login: 'Hay',
  //         lido: true
  //       },
  //       {
  //         descricao: '32113',
  //         created_at: "06/06/2020",
  //         login: 'Paula',
  //         lido: true
  //       },

  //     ]
  //   },
  //   {
  //     id: 2,
  //     titulo: "titulo 2",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  //     data_venda: "28/11/2020",
  //     data_entrega: "5/12/2020",
  //     vendedor: 'Wesley',
  //     prioridade: 1,
  //     os: "0002",
  //     comentarios: [
  //       {
  //         descricao: 'ssssssss',
  //         created_at: "06/06/2020",
  //         login: 'Saci',
  //         lido: false
  //       },

  //     ]
  //   },
  //   { 
  //     id: 3,
  //     titulo: "titulo 3",
  //     descricao: "Lorem Ipsum is simply Lorem",
  //     data_venda: "28/11/2020",
  //     data_entrega: "5/12/2020",
  //     vendedor: 'Wesley',
  //     prioridade: 2,
  //     os: "0003",
  //     comentarios: [
  //       {
  //         descricao: 'ddsdsadsad',
  //         created_at: "06/06/2020",
  //         login: 'Cristiane',
  //         lido: true
  //       },

  //       {
  //         descricao: 'fgfgfgfgfg',
  //         created_at: "06/06/2020",
  //         login: 'Matheus',
  //         lido: true
  //       },


  //     ]
  //   },
  //   {
  //     id: 4,
  //     titulo: "titulo 4",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     data_venda: "01/12/2020",
  //     data_entrega: "10/12/2020",
  //     vendedor: 'Cristiane',
  //     prioridade: 3,
  //     os: "0004",
  //     comentairos: []
  //   },
  //   {
  //     id: 5,
  //     titulo: "titulo 5",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  //     data_venda: "28/11/2020",
  //     data_entrega: "5/12/2020",
  //     vendedor: 'Wesley',
  //     prioridade: 1,
  //     os: "0002",
  //     comentairos: []
  //   },
  //   {
  //     id: 6,
  //     titulo: "titulo 6",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. and typesetting industry.",
  //     data_venda: "28/11/2020",
  //     data_entrega: "5/12/2020",
  //     vendedor: 'Wesley',
  //     prioridade: 1,
  //     os: "0003",
  //     comentairos: [
  //       {
  //         descricao: 'nbnbnbnbnb',
  //         created_at: "06/06/2020",
  //         login: 'Vilão',
  //         lido: true
  //       },
  //     ]
  //   },
  //   {
  //     id: 7,
  //     titulo: "titulo 7",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     data_venda: "01/12/2020",
  //     data_entrega: "10/12/2020",
  //     vendedor: 'Cristiane',
  //     prioridade: 4,
  //     os: "0004",
  //     comentairos: []
  //   },
  //   {
  //     id: 8,
  //     titulo: "titulo 8",
  //     descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text ",
  //     data_venda: "28/11/2020",
  //     data_entrega: "5/12/2020",
  //     vendedor: 'Wesley',
  //     prioridade: 1,
  //     os: "0002",
  //     comentairos: []
  //   },

  // ];

@Input() filtroPrioridade:any  
pedidos:any = []
pedidos_filtrados:any = undefined
itemParaProducao:any = []

pedidoDetalhesRef: BsModalRef | undefined;
enviaParaProducaoRef: BsModalRef | undefined;
addComentarioRef!: BsModalRef;

pedido:any
constructor(private modalService: BsModalService, 
            private pedidoService: PedidoService,
            private conversaService: ConversaService,
            private defaultService: DefaultService,            
            private formBuild: FormBuilder,
            private notificationService: NotificationService) {
               
            }

config = {
  animated: false,
  class: 'modal-xl',
  ignoreBackdropClick: true
}

  formConversa = this.formBuild.group({
    descricao: [null, Validators.required]
  })

  abreModalDetalhes(pedido_id: any, templade: TemplateRef<any>) {
    this.pedidoService.showPedido(pedido_id).subscribe((resp) => {      
      this.pedido = resp;      
    }, (err) => {
      console.error(err);
      this.notificationService.notify("Ops! ocorreu um erro ao tentar carregar o pedido")
    })
    
    this.pedidoDetalhesRef = this.modalService.show(templade, {id: 1, class: "modal-lg"})
  };


  addComentario(pedido_id:any) {   
    if(this.formConversa.valid) {      
        this.conversaService.addConversa(pedido_id, this.formConversa.get("descricao")?.value).subscribe(resp => {          
          this.notificationService.notify("comentário adicionado com sucesso!")
          this.ngOnInit();      
        }, (err) => {
          console.error(err) 
          this.notificationService.notify("Ops Ocorreu um erro")
        }
      )
    }
    this.modalFechar();
    // this.closeModal(2);
  }
  
  abreModalAddComentario(templade: TemplateRef<any>) {
    this.addComentarioRef = this.modalService.show(templade, {id: 2})
  }

  abreModalProducao(templade: TemplateRef<any>) {
    this.enviaParaProducaoRef = this.modalService.show(templade, {id: 3})
  }
  
  closeModal(modalId?: number){
    this.modalService.hide(modalId);
  }


  modalFechar() {    
      this.modalService.hide();
      this.ngOnInit();    
  }

  checkItem(id:any) {
    this.itemParaProducao.push(id);
  }

  sendProducao() {    
    this.pedidoService.addItemParaProdução(this.itemParaProducao).subscribe((resp) => {
      this.notificationService.notify("Itens mandados para produção")
    }, err => {
      this.notificationService.notify("Ops ocorreu um erro ao mandar para produção")
      console.error("Error ao mandar para produção")
    })
    this.itemParaProducao = []
    this.closeModal(3)
  }
    
  
  ngOnInit() {
      
    this.defaultService.emiteEventoFiltro.subscribe(resp => {      
      let filtro:any = resp 
      this.pedidos_filtrados = this.pedidos.filter((obj:any) => {
        
        if (filtro == 0) {          
          return obj.prioridade > filtro
        } else {
          return obj.prioridade == filtro
        }
      })       
    }) 
    
    this.pedidoService.getAllPedidos().subscribe( (resp) => {      
      setTimeout( () => {
        console.log(resp)
        this.pedidos = resp        
        this.pedidos_filtrados = resp        
      }, 2000)
      
      }, (err) => {
        this.notificationService.notify("Ops, Ocorreu um erro ao carregar os Pedidos!")
      })

      
      
      

      
      
  }

  



}

import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotificationService } from '../shared/notification.service';
import { ClienteService } from '../cliente/cliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { VendaService } from './venda.service';
import { Router } from '@angular/router';


defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  pedidoItens:any = [
    // {produto: "Cartão", descricao: "teste de descrição produto",tiragem: 150, valor: 120.0 },
    
  ];

  cliente_id:any

  totalValorPedido:any = 0;
  valorComDesconto:any = 0;
  showEndEntrega = false;
  today: Date;
  maxDate: Date;
  minDate: Date;
  locale = 'pt-br';
  ValorDescontoAlto = false 
  numero_de_pedido:any  
  formAddItemNoPedidoRef: BsModalRef | undefined;
  confirmaFechamentoPedidoRef: BsModalRef | undefined;
  detalheDoPedidoRef: BsModalRef | undefined;

  config = {
    animated: true,    
    ignoreBackdropClick: true
  }


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private localeService: BsLocaleService,
    private vendaService: VendaService,
    private notificationService: NotificationService,
    private modalService: BsModalService,
    private clienteService: ClienteService,
    private el: ElementRef) { 
      this.today = new Date();
      // this.minDate = new Date(this.today.getDate(), this.today.getMonth(), 2);
      this.minDate = new Date(this.today.setDate(this.today.getDate()));

      this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
      localeService.use('pt-br');

      
   
   
    }
  
  formVenda = this.formBuilder.group({    
    // venda: this.formBuilder.group({
      produto: [null],
      tipoVenda: [1, Validators.required],
      tiragem: [null, Validators.required],
      descricao: [null, Validators.required],     
           
      valor: [null]
    // })
  });

  
  formCliente = this.formBuilder.group({
    // cliente: this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(254)]],      
      
      cliente_contato_attributes: this.formBuilder.group({
        celular: [null, [Validators.required, Validators.maxLength(12)]],
        email: [null, [Validators.required, Validators.maxLength(254)]],
        instagram: [null],
        whatsapp: ["ok"],
      }),
      // celular: [null],
      cliente_endereco_attributes: this.formBuilder.group({
        endereco: [null],
        numero: [null],
        bairro: [null],
        cidade: [null],
        estado: [null],
        cep: [null],
      })
      
      // })
    // })    
  });
  formDadosEntrega = this.formBuilder.group({
    
      urgencia: [null],
      data_entrega: [null],
      retirar: [0],      
      endereco_entrega: [null],
      numero_entrega: [null],            
      
    
  })

  formDesconto = this.formBuilder.group({
    desconto: [null],
    forma_pagamento: ["dinheiro", Validators.required]
  })
  
  mandar(e:any) {
    if (e.target.value == 0) {
      this.showEndEntrega = true      
    } else {
      // this.formCliente.get('cliente.entrega_attributes.endEntrega.localEntrega')?.patchValue("")
      // this.formCliente.get('cliente.entrega_attributes.endEntrega.numeroEntrega')?.patchValue("")
      this.formCliente.get('entrega_attributes.endEntrega.localEntrega')?.patchValue("")
      this.formCliente.get('entrega_attributes.endEntrega.numeroEntrega')?.patchValue("")
      this.showEndEntrega = false
    }
     
  }

  addObservacao() {
    console.log("Clicou");
  }

  addItemNaCesta() {
    console.log("Clicou ITEM PRA CESTA");
    let itemProduto = this.formVenda.get('produto');
    let itemDescricao = this.formVenda.get('descricao');
    let itemTiragem = this.formVenda.get('tiragem');
    let itemValor = this.formVenda.get('valor');
    // let itemDesconto = this.formVenda.get('venda.desconto');
    
    if (this.formVenda.valid) {
      console.log("Clicou MANDOU ITEM PRA CESTA");

      let item = {"produto": itemProduto?.value, "descricao": itemDescricao?.value, "tiragem": itemTiragem?.value, "valor": parseFloat(itemValor?.value) }    

      this.pedidoItens.push(item)
      console.log(this.pedidoItens)
      itemProduto?.patchValue("")
      itemTiragem?.patchValue("")
      itemDescricao?.patchValue("")
      itemValor?.patchValue("")      
      this.modalFechar()
      this.notificationService.notify("Item adicionado com Sucesso!")
      
      }
  }

  removeItemDaCesta(item:any) {    
    var indice = this.pedidoItens.findIndex((obj:any) => obj.produto == item);    
    
    this.pedidoItens.splice(indice,1)
    
  }

  realizarPedido() {
    console.log("Clicou fechar pedido");
    if (this.pedidoItens.length > 0) {
      console.log(this.pedidoItens)
      console.log("Pedido realizado com sucesso");
    }
  } 
  
  MostraFormAddItem(templade: TemplateRef<any>) {
    // this.pedido = pedido;
    this.formAddItemNoPedidoRef = this.modalService.show(templade, this.config)
  };
  
  modalFechar() {
    this.modalService.hide();
  }
  
  totalPedido() { 
    if (this.pedidoItens.length > 0) {
      let valor = this.pedidoItens.map((item:any) => item.valor)
      this.totalValorPedido = valor.reduce((total:any, atual:any) => total + atual, 0);
      
      return this.totalValorPedido
    }   
  }
  
  calcularDesconto() {    
    let desc = this.formDesconto.get('desconto')?.value;
    if (desc < 100) {
      this.valorComDesconto = this.totalValorPedido*(desc/100);    
      this.ValorDescontoAlto = false
      return this.valorComDesconto
    } else {      
      let desconto = this.formDesconto?.get('desconto')
      desconto?.patchValue("");
      this.ValorDescontoAlto = true
      this.notificationService.notify("Ops! Valor inválido")
    }
  } 

  abreModal(templade: TemplateRef<any>) {
    // this.pedido = pedido;
    this.detalheDoPedidoRef = this.modalService.show(templade, this.config)
  };

  finalizarPedido(){
    if (this.pedidoItens.length > 0 && this.formCliente.valid){ 
      this.vendaService.addPedido(
            this.numero_de_pedido,
            this.totalPedido(),             
            this.formDesconto.get("desconto")?.value,
            this.formDesconto.get("forma_pagamento")?.value,
            this.cliente_id, 
            this.formDadosEntrega?.value,
            this.pedidoItens,
            )
        .subscribe((resp) => {
          console.log(resp)
          this.modalFechar();
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['venda']);
            // this.myService.reload = false;
          });
          this.notificationService.notify("Pedido realizado com sucesso!")
        }, (err) => {
          this.notificationService.notify("Ops! ocorreu um erro!")
          console.error(err)
        })
    } else if (!this.formCliente.valid) {
      this.modalFechar();
      this.notificationService.notify("Dados do cliente obrigatório!")
    }
  }

  createCliente() {
    this.modalFechar();
    if(this.formCliente.valid) {
      this.clienteService.addCliente(this.formCliente.value).subscribe((resp:any) => {
        this.notificationService.notify("Oba!! Cliente cadastrado com Sucesso!")  
        console.log(resp);
        this.cliente_id = resp["id"];
      }, (err) => {
        this.notificationService.notify("Ops!! Ocorreu um erro!");
        console.error(err)
      })  
    } else {
      this.notificationService.notify("Ops!! Formulário inválido");    
    }    
  }
  
  getValor() {}
   
  ngOnInit(): void {
    this.vendaService.getLastOS().subscribe((resp:any) => {      
      this.numero_de_pedido = resp["os"]  
    })
   }
  

}

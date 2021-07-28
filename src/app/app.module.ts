import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VendaComponent } from './venda/venda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { NotificationService } from './shared/notification.service';
import { ClienteService } from './cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { VendaService } from './venda/venda.service';
import { PedidoService } from './pedidos/pedido.service';
import { ConversaService } from './conversa/conversa.service';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { DefaultService } from './default.service';
import { PrincipalComponent } from './principal/principal.component';
import { ProducaoComponent } from './producao/producao.component';
// import { NgxMaskModule } from 'ngx-mask';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    VendaComponent,
    SnackbarComponent,
    MenuTopoComponent,
    PrincipalComponent,
    ProducaoComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    // NgxMaskModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    ClienteService,
    PedidoService,
    ConversaService,
    VendaService,  
    DefaultService,  
    NotificationService,
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

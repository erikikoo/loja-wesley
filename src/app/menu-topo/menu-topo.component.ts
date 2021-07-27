import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../default.service';

@Component({
  selector: 'menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.scss']
})
export class MenuTopoComponent implements OnInit {

  constructor(private defautlService: DefaultService) { }
  
  filtraPedido(p:any) {    
    this.defautlService.setPrioridade(p)    
  }

  ngOnInit(): void {
    
  }

}

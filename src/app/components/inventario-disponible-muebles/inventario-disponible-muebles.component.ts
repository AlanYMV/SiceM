import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inventario-disponible-muebles',
  templateUrl: './inventario-disponible-muebles.component.html'
})
export class InventoryAvailableFurniture implements OnInit {

  inventory:Inventory[]=[];
  selectedValues: string[] = [];
  

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.loadItems();
  }

  download(){
      const url: string = "http://192.168.84.108:8080/servicios/descargar_inventario_disponible_muebles/";
      console.info(url);
      window.location.href = url;    
  }

}

interface Inventory{
  item:string,
  on_hand:string,
  in_transit:string,
  allocated:string,
  suspense:string,
  requested:string,
  quantity:string,
  real_available:string,
  date_time:string
}

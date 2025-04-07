import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inventory-available',
  templateUrl: './inventory-available.component.html'
})
export class InventoryAvailable implements OnInit {

  inventory:Inventory[]=[];
  tipeL: any[] = [];
  tipeZ: any[] = [];
  selectedValues: string[] = [];
  
  Dt = '';  

  constructor(private http: HttpClient) {
    this.Dt = this.dateToday()
    this.http.get('http://192.168.84.108:8080/servicios/inventario_disponible/'+this.Dt).subscribe((data: any) => {
      console.log(data);
      this.inventory = data;
    });}

  ngOnInit(): void {
    // this.loadItems();
  }
  dateToday(): string {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var todayDate = '';

    todayDate = ''+ yyyy+ '-' + mm + '-'+ dd + '';
    console.log(todayDate);
    return todayDate
  }

  loadItems(): void {
    this.http.get<any[]>('http://192.168.84.108:8080/servicios/tipo_localizacion/').subscribe(data => {
      this.tipeL = data.map(item => ({
        value: item.value,
        selected: false
      }));
    });
    this.http.get<any[]>('http://192.168.84.108:8080/servicios/zona_localizacion/').subscribe(data => {
      this.tipeZ = data.map(item => ({
        value: item.value,
        selected: false
      }));
    });
  }

  searchInventory(fecha:string){
    // console.log(fecha)
    if (fecha){
      this.http.get('http://192.168.84.108:8080/servicios/inventario_disponible/'+fecha).subscribe((data: any) => {
        console.log(data);
        this.inventory = data;
      });
    }
    else{
      alert("Ingrese la fecha que desea buscar")
    }
  }
  download(fecha:string){
    console.log(fecha)
    if (fecha){
      const url: string = "http://192.168.84.108:8080/servicios/descargar_inventario_disponible/"+fecha;
      console.info(url);
      window.location.href = url;
    }
    else{
      alert("Ingrese la fecha que desea descargar")
    }
  }

  downloadCategory(fecha:string){
    console.log(fecha)
    if (fecha){
      const url: string = "http://192.168.84.108:8080/servicios/descargar_inventario_categoria/"+fecha;
      console.info(url);
      window.location.href = url;
    }
    else{
      alert("Ingrese la fecha que desea descargar")
    }
  }
  downloadFurniture(){
    const url: string = "http://192.168.84.108:8080/servicios/descargar_inventario_disponible_muebles/";
    console.info(url);
    window.location.href = url;
    
  }

  submitSelectedValues(): void {
    const selectedTipeL = this.tipeL.filter(item => item.selected).map(item => item.value.replace(/ /g, '_')).join(',');
    const selectedTipeZ = this.tipeZ.filter(item => item.selected).map(item => item.value.replace(/ /g, '_')).join(',');

    const url = `${selectedTipeL}/${selectedTipeZ}`;
    const  p = 'http://192.168.84.108:8080/servicios/inventario_disponible_parametros/'+ url;
    console.info(p);
      window.location.href = p;
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

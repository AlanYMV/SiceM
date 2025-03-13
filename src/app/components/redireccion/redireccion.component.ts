import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redireccion',
  templateUrl: './redireccion.component.html'
})
export class ReciboTiendaComponent implements OnInit {

  title = 'Redireccion';
  userInput: string = '';
  selectedOption: string = '';
  options: { value: string, label: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOptions();
  }

  fetchOptions() {
    this.http.get<{ value: string }[]>('http://127.0.0.1:8000/servicios/lista_tiendas/')
      .subscribe(data => {
        // console.log(data); // Verifica los datos recibidos
        this.options = data.map(item => ({ value: item.value, label: item.value }));
      });
  }

  sendData() {
    const payload = {
      userInput: this.userInput,
      selectedOption: this.selectedOption
    };
  
    const confirmation = confirm('¿Estás seguro de que quieres redireccionar el pedido ' + this.userInput + ' a la tienda ' + this.selectedOption + '?');
    if (confirmation) {
      this.http.get('http://127.0.0.1:8000/servicios/redireccion/'+this.userInput+'/'+this.selectedOption+'')
        .subscribe(response => {
          console.log('Data sent successfully', response);
        });
      console.log('Data sent successfully', payload);
    }
  }
}

interface ReciboTienda{
  carga: string,
  pedido: string,
  llegadaTransportista: string,
  inicioScaneo: string,
  finScaneo: string,
  cierreCamion: string,
}

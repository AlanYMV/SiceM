import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redireccion',
  templateUrl: './redireccion.component.html'
})
export class Redireccion implements OnInit {

  title = 'Redireccion';
  userInput: string = '';
  selectedOption: string | null = null;
  options: { value: string, label: string }[] = [];
  contenedores: number = 0;
  piezas: number = 0;
  tienda: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOptions();
  }

  fetchOptions() {
    this.http.get<{ value: string }[]>('http://192.168.84.108:8080/servicios/lista_tiendas/')
      .subscribe(data => {
        // console.log(data); // Verifica los datos recibidos
        this.options = data.map(item => ({ value: item.value, label: item.value }));
      });
  }
  onTransactionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target?.value;
    if (value !== null && value !== undefined && value !== " " && value !== "Tipo de transaccion") {
      this.selectedOption = value;
    } else {
      this.selectedOption = null;
    }
  }
  
  fetchData(pedido: string): void {
    if (pedido.trim() === '') {
      this.contenedores = 0;
      this.piezas = 0;
      this.tienda = '';
      return;
    }
  
    const url = `http://192.168.84.108:8080/servicios/contenedor-pieza/${pedido}`;
    console.log(url);
    this.http.get<any[]>(url).subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.contenedores = data[0].container || 0;
          this.piezas = parseFloat(data[0].pza) || 0; // Convertir a número si es necesario
          this.tienda = data[0].tda || '';
        } else {
          this.contenedores = 0;
          this.piezas = 0;
          this.tienda = '';
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.contenedores = 0;
        this.piezas = 0;
      }
    );
  }
  sendData(pedido:string) {
    // const payload = {
    //   userInput: this.userInput,
    //   selectedOption: this.selectedOption
    // };
  
    const confirmation = confirm('¿Estás seguro de que quieres redireccionar el pedido ' + pedido + ' a la tienda ' + this.selectedOption + '?');
    if (confirmation) {
      const url = `http://192.168.84.108:8080/servicios/redireccion/${pedido}/${this.selectedOption}`;
      console.log('Llamando a la URL:', url);
    
      this.http.get<{ Mensaje?: string; Error?: string }>(url)
        .subscribe(
          response => {
            if (response.Mensaje) {
              console.log('Operación exitosa:', response.Mensaje);
              alert(`${response.Mensaje}`);
            } else if (response.Error) {
              console.error('Error recibido:', response.Error);
              alert(`Error: ${response.Error}`);
            }
          },
          error => {
            console.error('Error en la solicitud:', error);
            alert('Ocurrió un error al procesar la solicitud.');
          }
        );
    }
  }
}

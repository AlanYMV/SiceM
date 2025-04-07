import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporteTi',
  templateUrl: './reporteTi.component.html'
})
export class ReporteTi implements OnInit {
  rows: any[] = [];
  bugsRelevant: BugsRelevant[] = [];

  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ value: string }[]>('http://192.168.84.108:8080/servicios/bugs_relevantes/').subscribe((data: any) => {
      console.log(data);
      this.bugsRelevant = data;
      });
  }

  agregarFila(): void {
    this.rows.push({ campo1: '', campo2: 'Abierta', campo3: '' });
  }

  guardar(): void {
    // Lógica para guardar los datos
    console.log(this.rows);
  }

}

interface BugsRelevant{
  description:string,
  status:string,
  comments:string}
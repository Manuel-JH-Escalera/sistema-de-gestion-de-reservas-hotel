import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  public habitaciones: any[] = [];
  constructor(private api: APIService) {}

  ngOnInit() {
    this.cargarHabitaciones();
  }
  cargarHabitaciones() {
    this.api.getHabitaciones().subscribe(
      (res) => {
        console.log(res);
        this.habitaciones = res;
      },
      (error) => {
        console.log('Error al cargar habitaciones:', error);
      });
  }
}

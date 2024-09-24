import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Reserva {
  habitacion_id: number;
  fecha_entrada: string;
  fecha_salida: string;
  cantidad_personas: number;
  nombre: string;
  correo: string;
  tarjeta_numero: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  datosReserva: Reserva = {
    habitacion_id: 1,
    fecha_entrada: '',
    fecha_salida: '',
    cantidad_personas: 1,
    nombre: '',
    correo: '',
    tarjeta_numero: ''
  };

  today = new Date().toISOString();
  twoYearsFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  realizarReserva() {
    console.log('Datos de reserva:', this.datosReserva);
    this.router.navigate(['/confirmacion']);
  }
}

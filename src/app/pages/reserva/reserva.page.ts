import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  habitacionId: any;
  datosReserva: Reserva = {
    habitacion_id: 0,
    fecha_entrada: '',
    fecha_salida: '',
    cantidad_personas: 0,
    nombre: '',
    correo: '',
    tarjeta_numero: '',
  };

  today = new Date().toISOString();
  twoYearsFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  ).toISOString();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.habitacionId = this.route.snapshot.paramMap.get('id');
  }

  realizarReserva() {
    console.log('Datos de reserva:', this.datosReserva);
    this.datosReserva.habitacion_id = this.habitacionId;
    // llamado a endpoint
    this.router.navigate(['/confirmacion']);
  }
}

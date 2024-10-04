import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private api: APIService) {}

  ngOnInit() {
    this.habitacionId = this.route.snapshot.paramMap.get('id');
  }

  realizarReserva() {
    console.log('Datos de reserva:', this.datosReserva);
    this.datosReserva.habitacion_id = this.habitacionId;

    this.api.getUsuarios().subscribe(
      (res) => {
        const userId = res[0].USER_ID;
        const reservaData = {
          habitacion_id: this.datosReserva.habitacion_id,
          user_id: userId,
          fecha_entrada: new Date(this.datosReserva.fecha_entrada).toISOString().split('T')[0],
          fecha_salida: new Date(this.datosReserva.fecha_salida).toISOString().split('T')[0],
          cantidad_personas: this.datosReserva.cantidad_personas
        };
        console.log('Datos de reserva',reservaData);

        this.api.createReserva(reservaData).subscribe(
          (res) => {
            console.log('Reserva creada:', res);
            this.router.navigate(['/confirmacion']);
          },
          (error) => {
            console.log('Error al crear reserva:', error);
          }
        );
      },
      (error) => {
        console.log('Error al cargar usuario:', error);
      }
    );
  }
}

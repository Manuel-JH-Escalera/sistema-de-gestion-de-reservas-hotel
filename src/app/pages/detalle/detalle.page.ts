import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  habitacionId: any;
  detalleHab: any;
  /* acceder a detalles mediante
    detalleHab.HABITACION_ID
    detalleHab.HOTEL_ID
    detalleHab.TIPO
    detalleHab.CAPACIDAD
    detalleHab.PRECIO
  */
  constructor(private route: ActivatedRoute, private api: APIService) { }

  ngOnInit() {
    this.habitacionId = this.route.snapshot.paramMap.get('id');
    
    this.api.getHabitacion(this.habitacionId).subscribe((detalle)=>{
      console.log(detalle);
      this.detalleHab = detalle;
    },
    (error) => {
      console.log('Error al cargar detalles:', error);
    });
  }

}

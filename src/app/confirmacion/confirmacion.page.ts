import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {

  ultimaReserva: any;

  constructor(private api:APIService) { }

  ngOnInit() {
    this.api.getReservas().subscribe((res)=>{
      if(res.length > 0){
        console.log('Ultima reserva:',res[res.length - 1]);
        this.ultimaReserva = res[res.length - 1];
      } else{
        console.log('No se han encontrado reservas.')
      }
    },(error)=>{
      console.log('Error al recuperar reserva:',error)
    })

  }

}

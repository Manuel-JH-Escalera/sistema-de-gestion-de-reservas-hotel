import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string = '';
  password: string = '';
  selectedLanguage: string = 'es'; // Default to Spanish

  constructor(private router: Router, private api: APIService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  placeholder(){
    console.log('click is working');
  }

  async onLogin(){
    if(this.correo && this.password){
      this.api.getUsuarios().subscribe(
        async (users) => {
          const user = users.find(
            (u: any)=> u.EMAIL === this.correo && u.PASSWORD === this.password
          );
          if (user){
            //exito
            this.router.navigate(['/inicio']);
          } else {
            //fallo
            const alert = await this.alertCtrl.create({
              header: 'Error de Login',
              message: 'Correo o contraseña invalidos',
              buttons: ['OK']
            });
            await alert.present();
          }
        },
        async (error) => {
          //error de API
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'No se pudo acceder a los datos de usuario',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    } else{
      //falta ingresar correo o contraseña
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Ingresar correo y contraseña',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}

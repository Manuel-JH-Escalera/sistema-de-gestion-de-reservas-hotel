import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string = '';
  password: string = '';
  selectedLanguage: string = 'es'; // Default to Spanish

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pruebaLogin(){
    this.router.navigate(['/inicio']);
  }
  placeholder(){
    console.log('click is working');
  }
}

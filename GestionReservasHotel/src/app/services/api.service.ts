import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
    }
  // Se establece la base url del API a consumir
  apiURL = 'http://localhost:3000/api';
  // Se declara la variable http de tipo HttpClient
  constructor(private http:HttpClient) { }
  // Handling errors (optional)
  handleError(error: any) {
    console.error('API error:', error);
    return throwError(error);
  }
  //CRUD
  //hoteles
    getHoteles(): Observable<any> {
      return this.http.get(this.apiURL + '/hoteles').pipe(
        retry(3),  // Retry failed request up to 3 times
        catchError(this.handleError)
      );
    }
  
    createHotel(data: any): Observable<any> {
      return this.http.post(this.apiURL + '/hoteles', data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
  
    updateHotel(id: number, data: any): Observable<any> {
      return this.http.put(this.apiURL + '/hoteles/' + id, data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
  
    deleteHotel(id: number): Observable<any> {
      return this.http.delete(this.apiURL + '/hoteles/' + id).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
  //habitaciones
    getHabitaciones(): Observable<any> {
      return this.http.get(this.apiURL + '/habitaciones').pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    createHabitacion(data: any): Observable<any> {
      return this.http.post(this.apiURL + '/habitaciones', data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    updateHabitacion(id: number, data: any): Observable<any> {
      return this.http.put(this.apiURL + '/habitaciones/' + id, data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    deleteHabitacion(id: number): Observable<any> {
      return this.http.delete(this.apiURL + '/habitaciones/' + id).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
  //usuarios
    getUsuarios(): Observable<any> {
      return this.http.get(this.apiURL + '/usuarios').pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    createUsuario(data: any): Observable<any> {
      return this.http.post(this.apiURL + '/usuarios', data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    updateUsuario(id: number, data: any): Observable<any> {
      return this.http.put(this.apiURL + '/usuarios/' + id, data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    deleteUsuario(id: number): Observable<any> {
      return this.http.delete(this.apiURL + '/usuarios/' + id).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
  //reservas
    getReservas(): Observable<any> {
      return this.http.get(this.apiURL + '/reservas').pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    createReserva(data: any): Observable<any> {
      return this.http.post(this.apiURL + '/reservas', data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    updateReserva(id: number, data: any): Observable<any> {
      return this.http.put(this.apiURL + '/reservas/' + id, data).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }

    deleteReserva(id: number): Observable<any> {
      return this.http.delete(this.apiURL + '/reservas/' + id).pipe(
        retry(3),
        catchError(this.handleError)
      );
    }
  }

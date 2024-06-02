import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mina } from '../model/mina';
import { Observable, catchError, throwError } from 'rxjs';

//const base_url = 'http://localhost:8080/api/minas'  
const base_url = 'http://localhost:3000/minas'


@Injectable({
  providedIn: 'root'
})
export class MinaService {

  constructor(private http: HttpClient) { }

  async crearMina(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Mina>(endpoint, body).pipe(
      catchError(this.handleError)
    )
  }

  async listarMinas(): Promise<Observable<any>> {
      const endpoint = `${base_url}`;
      return this.http.get<any>(endpoint).pipe(
        catchError(this.handleError)
      )
    }
    private handleError(error: any): Observable<never> {
      console.error('Se presentó el siguiente error:', error); // Log the error for debugging
      return throwError('Algo salió mal; por favor trate más tarde.');
    }

}

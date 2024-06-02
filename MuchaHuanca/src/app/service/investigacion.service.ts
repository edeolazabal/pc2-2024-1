import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Investigacion } from '../model/investigacion';


//const base_url = 'http://localhost:8081/api/investigacion'      // backend
const base_url = 'http://localhost:3000/investigaciones'

@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  constructor(private http: HttpClient) { }

  async crearInvestigacion(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Investigacion>(endpoint, body).pipe(
      catchError(this.handleError)
    )
  }


  async listarInvestigacion(): Promise<Observable<any>> {
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investigacion } from '../model/Investigacion';

const base_url = "http://localhost:8081/investigaciones"

@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  constructor(private http: HttpClient) { }

  getInvestigacion() {
    const endpoint = `${base_url}`;
    return this.http.get<Investigacion[]>(endpoint)
  }
  saveInvestigacion(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Investigacion>(endpoint, body)
  }
}

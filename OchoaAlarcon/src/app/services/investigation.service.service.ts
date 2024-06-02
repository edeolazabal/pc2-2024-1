import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investigation } from '../models/investigation';

const base_url = "http://localhost:3000/investigations";

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {

  constructor(private http: HttpClient) { }

  getInvestigations() {
    const endpoint = `${base_url}`;
    return this.http.get<Investigation[]>(endpoint);
  }

  getInvestigationByCodigo(codigo: any) {
    const endpoint = `${base_url}/${codigo}`;
    return this.http.get<Investigation>(endpoint);
  }

  saveInvestigation(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Investigation>(endpoint, body);
  }
}

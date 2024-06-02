import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mina } from '../Models/mina';
const base_url = "http://localhost:3000/minas";
//const base_url = "http://localhost:8081/minas";
@Injectable({
  providedIn: 'root'
})
export class MinaService {

  constructor(private http: HttpClient) { }

  getMinas() {
    const endpoint = `${base_url}`;
    return this.http.get<Mina[]>(endpoint)
  }
  saveMina(renta: Mina) {
    const endpoint = `${base_url}`;
    return this.http.post<Mina>(endpoint, renta)
  }
  
}
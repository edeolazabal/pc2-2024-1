import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mina } from '../model/mina';

const base_url = 'http://localhost:8080/api/mina'
//const base_url = "http://localhost:3000/Mina"

@Injectable({
  providedIn: 'root'
})
export class MinaService {
  constructor(private http: HttpClient) { }

  getMinas() {
    const endpoint = `${base_url}`;
    return this.http.get<Mina[]>(endpoint)
  }
  getMinasById(id: any) {
    const endpoint = `${base_url}/${id}`;
    return this.http.get<Mina[]>(endpoint)
  }
  saveMinas(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Mina>(endpoint, body)
  }
}

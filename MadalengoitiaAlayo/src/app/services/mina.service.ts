import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mina } from '../models/mina';

const base_url = "http://localhost:3000/minas"

@Injectable({
  providedIn: 'root'
})
export class MinaService {

  constructor(private http: HttpClient) { }

  saveMina(body: any) {
    const endpoint = `${base_url}/`;
    return this.http.post<Mina>(endpoint, body) 
  }

  getMinas() {
    const endpoint = `${base_url}/`;
    return this.http.get<Mina[]>(endpoint) 
  }

}

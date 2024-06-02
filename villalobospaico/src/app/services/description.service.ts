import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Description } from '../models/description';

const base_url = 'http://localhost:8081/descriptions'

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
    constructor(private http: HttpClient) { }
    
    getDescriptions() {
    const endpoint = `${base_url}`;
    return this.http.get<Description[]>(endpoint)
}
  saveDescription(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Description>(endpoint, body)
  }
}

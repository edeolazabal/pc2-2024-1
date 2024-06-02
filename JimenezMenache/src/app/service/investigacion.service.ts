import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "./invironment.service";

export interface Investigation {
  id?: number;
  code: string;
  description: string;
  approvalDate: Date;
  type: string;
  budget?: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {

  private apiUrl = `${environment.apiUrl}/api/investigations`;

  constructor(private http: HttpClient) { }

  register(investigation: Investigation): Observable<Investigation> {
    return this.http.post<Investigation>(`${this.apiUrl}/register`, investigation);
  }

  getAll(): Observable<Investigation[]> {
    return this.http.get<Investigation[]>(this.apiUrl);
  }

  getById(id: number): Observable<Investigation> {
    return this.http.get<Investigation>(`${this.apiUrl}/${id}`);
  }

  update(id: number, investigation: Investigation): Observable<Investigation> {
    return this.http.put<Investigation>(`${this.apiUrl}/${id}`, investigation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

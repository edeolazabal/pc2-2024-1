import { Injectable } from '@angular/core';
import { Observable, Subject, map} from 'rxjs';
import { investigacion } from '../model/investigacion';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

const base_url = "http://localhost:3000/investigations"  // environment.base;


@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {
  private url = `${base_url}`;
  private listaCambio = new Subject<investigacion[]>();
  
  constructor(private http:HttpClient) { } 

  list() : Observable<any> {
    console.log(this.url+ "");
    return this.http.get<investigacion[]>(this.url + "");
 } 

 insert (inves: investigacion) {
    return this.http.post(this.url + "", inves)
 }
 
 setList(listaNueva : investigacion[]){
   this.listaCambio.next(listaNueva);
 }
 getList(){
   return this.listaCambio.asObservable();
 }

}

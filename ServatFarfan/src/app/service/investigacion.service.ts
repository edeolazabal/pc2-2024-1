import { Injectable } from '@angular/core';
import { Observable, Subject, map} from 'rxjs';
import { investigacion } from '../model/investigacion';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

const base_url = environment.base;


@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {
  private url = `${base_url}/servat`;
  private listaCambio = new Subject<investigacion[]>();
  
  constructor(private http:HttpClient) { } 

  list() : Observable<any> {
    console.log(this.url+ "/listar");
    return this.http.get<investigacion[]>(this.url + "/listar");
 } 

 insert (inves: investigacion) {
    return this.http.post(this.url + "/nuevo", inves)
 }
 
 setList(listaNueva : investigacion[]){
   this.listaCambio.next(listaNueva);
 }
 getList(){
   return this.listaCambio.asObservable();
 }

}

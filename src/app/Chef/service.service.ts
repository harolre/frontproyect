import { Injectable } from '@angular/core';
import { Chef } from '../Modelo/Chef';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceChef {
  chef:Chef
  constructor(private http:HttpClient) { }
  Url="http://localhost:8081/cocinero";
  gurl="http://localhost:8081/gchef";

  //Al parecer aqui llamamos al URL
  obtenerChef(){
   
    return this.http.get<Chef[]>(this.Url);
  }
  crearChef(chef:Chef):Observable<any>{
    const httpOptions= {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<Chef>(this.gurl,chef,httpOptions);
  }

}


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Chef } from '../Modelo/Chef';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  /*
  chef:Chef
  constructor(private http:HttpClient) { }
  Url='http://localhost:8081/cocinero';
  
  getChef(): Observable<any>{
    return this.http.get<Chef[]>(this.Url);

  }
*/
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }
   
  getDatasedes(){
    return this.http.get('http://localhost:3001/restaurant');
  }

  getDatasectores(){
    return this.http.get('http://localhost:3001/sector');
  }
  
  sendData(datos){
    return this.http.post('http://localhost:3001/cargarproyecto', {datos})
  }
    
}

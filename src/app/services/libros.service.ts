import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) {
    console.log('Servicio Http');
   }

   getLibros(): any {
    // aqui iria la URL de los datos que estaria obteniendo 
    // ruta ficticia
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
}

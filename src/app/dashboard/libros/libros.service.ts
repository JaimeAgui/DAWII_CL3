import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  listarLibros(): Observable<Libro[]>{
    return this.http.get<Libro[]>("https://6498c2269543ce0f49e24c34.mockapi.io/libro");
  }
}

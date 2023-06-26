import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from './editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(private http: HttpClient) { }

  listarEditoriales(): Observable<Editorial[]>{
    return this.http.get<Editorial[]>("https://6498c2269543ce0f49e24c34.mockapi.io/editorial")
  }
}

import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
//pones la url pilas pilaaaaaas
  url : string = "https://localhost:44391/api/Producto";

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  list(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url, this.httpOptions)
      .pipe(
        retry(1),
      );
  }

  retrieve(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1),
      );
  }
}

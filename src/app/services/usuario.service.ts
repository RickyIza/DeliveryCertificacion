import { Injectable } from '@angular/core';
import {Usuario} from 'src/app/models/usuario';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url : string = "https://localhost:44391/api/Usuario";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  save(u : Usuario) : Observable<any>{
    let usuarioBody = JSON.stringify(u);
    if(u.idUsuario === undefined){
      return this.http.post<any>(this.url, usuarioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, usuarioBody, this.httpOptions);
  }

  retrieve(id : number) : Observable<Usuario>{
    return this.http.get<Usuario>(this.url + "/" + id,this.httpOptions).pipe(retry(1));
  }

  delete(u : Usuario) : Observable<any>{
    return this.http.delete<any>(this.url + "/" + u.idUsuario, this.httpOptions);
  }

  list() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url, this.httpOptions).pipe(retry(1));
  }
}

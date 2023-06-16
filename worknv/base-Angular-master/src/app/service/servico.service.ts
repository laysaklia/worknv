import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscografiaComponent } from '../discografia/discografia.component';
import { DiscografiaModel } from '../discografia/discografia.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url: string = "http://localhost:3000/albuns/"
  constructor(private http: HttpClient) { }

  discoSong(): Observable<any>{
    return this.http.get(`${this.url}`)
  }
  cadastrar(disco: DiscografiaModel): Observable<any>{
    return this.http.post(`${this.url}`, disco)
  }
  atualizar(id: any, disco: DiscografiaModel): Observable<any>{
    return this.http.put(`${this.url}`.concat(id), disco)
  }
  excluir(id: any){
    return this.http.delete(`${this.url}`.concat(id))
  }
}
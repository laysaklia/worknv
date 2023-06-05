import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscografiaComponent } from '../discografia/discografia.component';
DiscografiaComponent
Observable

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url: string = "http://localhost:3000/albuns/"
  constructor(private http: HttpClient) { }

  discoSong(): Observable<any>{
    return this.http.get(`${this.url}`)
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Entrar } from './login';
Router
Entrar


@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private usuario1: boolean = false

  constructor(private router: Router) { }
  acesso(user: Entrar){
    if(user.login === 'laysa@uns.br' && user.senha === '123456'){
      this.usuario1 = true
      alert("Bem vindo!")
      this.router.navigate(['painel'])
    }else{
      this.usuario1 = false
      alert("Login ou senha incorretos! Tente novamente")
    }
  }
}

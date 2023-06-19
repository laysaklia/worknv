import { Component, OnInit } from '@angular/core';
import { AutoService } from './auto.service';
import { Entrar } from './login';
AutoService
Entrar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  cadastro: Entrar = new Entrar()
  constructor(private autoserv: AutoService){}
  ngOnInit(): void {
    
  }
  loginEntrar(){
    console.log(this.cadastro)
    this.autoserv.acesso(this.cadastro)
  }
}

import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  disco: Array<any> = new Array()

  constructor(private disco1: ServicoService) { }
  ngOnInit(): void {
    this.listarDisco()
  }
  listarDisco() {
    this.disco1.discoSong().subscribe(disco4 => {
      this.disco = disco4
    }, err => {
      console.log("Erro ao listar álbuns", err)
    })
  }
}

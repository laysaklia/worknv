import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../service/servico.service';
import { DiscografiaModel } from './discografia.model';
ServicoService
DiscografiaModel

@Component({
  selector: 'app-discografia',
  templateUrl: './discografia.component.html',
  styleUrls: ['./discografia.component.css']
})
export class DiscografiaComponent implements OnInit {
  disco: DiscografiaModel = new DiscografiaModel()

  disco2: Array<any> = new Array()

  constructor(private discografia: ServicoService){}
  ngOnInit(): void {
    this.listarDisco()
  }
  listarDisco(){
    this.discografia.discoSong().subscribe(disco4 => {
      this.disco2 = disco4
    }, err => {
      console.log("Erro ao listar álbuns", err)
    })
  }
  cadastrarSong(){
    console.log(this.disco)
    this.discografia.cadastrar(this.disco).subscribe(disco5 => {
      this.disco = new DiscografiaModel
      this.listarDisco()
    }, err => {
      console.log("Erro ao cadastrar álbum", err)
    })
  }
  atualizarSong(id: number){
    this.discografia.atualizar(id,this.disco).subscribe(disco5 => {
      this.disco = new DiscografiaModel()
      this.listarDisco()
    }, err => {
      console.log("Erro ao atualizar álbum", err)
    })
  }
  excluirSong(id: number){
    this.discografia.excluir(id).subscribe(disco5 => {
      this.disco = new DiscografiaModel()
      this.listarDisco()
    }, err => {
      console.log("Erro ao excluir álbum", err)
    })
  }
}

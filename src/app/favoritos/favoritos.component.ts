import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})

export class FavoritosComponent implements OnInit {
  listaIds = [];
  listaNomes = [];
  filmesFavoritos = [];
  check;

  constructor() { }
  deletarLista(){
    localStorage.clear();
    location.reload();
  }
  removerItemLista(idFilmeLista, nomeFilmeLista){
    const index: number = this.listaIds.indexOf(idFilmeLista);
    if (index !== -1) {
      this.listaIds.splice(index, 1);
    }
    console.log(this.listaNomes.length);
    const index2: number = this.listaNomes.indexOf(nomeFilmeLista);
    if (index2 !== -1) {
      this.listaNomes.splice(index, 1);
    }
    console.log(this.listaIds.length);
    localStorage.clear();
    for (let i = 0; i < this.listaNomes.length ; i++){
        this.filmesFavoritos.push(this.listaIds[i], this.listaNomes[i]);
    }
    localStorage.setItem('favoritos', JSON.stringify(this.filmesFavoritos));
    this.check = 'true';

  }
  addFav(){
    if(this.check === 'true'){
        this.check = 'false';
    } else {
      let json = localStorage.getItem('favoritos').replace(/[\[\]']+/g, '').replace(/\"/g, '').split(',');
      if (json.length > this.filmesFavoritos.length){}
      for (var i = 0; i < json.length ; i++){
        if (i % 2){
            this.listaNomes.push(json[i]);
          } else {
              this.listaIds.push(json[i]);
            }
          }
        }
    }
  ngOnInit(): void {
    return this.addFav();
  }

}

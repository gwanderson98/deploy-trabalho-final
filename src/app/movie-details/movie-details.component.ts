import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from './movie-details.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  filmeDetalhado;
  filmesFavoritos = [];
  constructor( private detailService: MovieDetailsService, private route: ActivatedRoute, private _location: Location) { }
  backClicked() {
    this._location.back();
  }
  saveFav(idFilme,nomeFilme){
    if (localStorage.hasOwnProperty('favoritos')) {
      this.filmesFavoritos = JSON.parse(localStorage.getItem('favoritos'));
    }
    if(this.filmesFavoritos.includes(idFilme) && this.filmesFavoritos.includes(nomeFilme)){
      alert('Filme já incluso na lista de favoritos');
    } else {
      this.filmesFavoritos.push(idFilme, nomeFilme);
      localStorage.setItem('favoritos', JSON.stringify(this.filmesFavoritos));
      window.location.href = '/favoritos';
      console.log(this.filmesFavoritos);
    }
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailService.getMovieById(id).subscribe(data => {
      console.log(data);
      this.filmeDetalhado = data;
    });
  }

}

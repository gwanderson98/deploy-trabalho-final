import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private URI = 'https://api.themoviedb.org/3';
  private KEY = '4581882ce738bbdeafb130c633d39bab';
  constructor(private htpp: HttpClient) {}

  getMovieById(id) {
    return this.htpp
      .get(`${this.URI}/movie/${id}?api_key=${this.KEY}&language=pt-BR`);
  }
}

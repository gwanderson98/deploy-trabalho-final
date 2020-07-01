import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private URI = 'https://api.themoviedb.org/3';
  private KEY = '4581882ce738bbdeafb130c633d39bab';
  constructor(private htpp: HttpClient) {}

  getResultSearch(search){
    return this.htpp
    .get(`${this.URI}/search/movie?api_key=${this.KEY}&language=pt-BR&query=${search}&page=1&include_adult=false`)
    .pipe(map((data: any) => data.results));
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) { }

  getPokemonByType(type: string): Observable<Object>
  {
    return this.http.get(
      'https://pokeapi.co/api/v2/type/' + type
    );
  }

  getPokemonDetail(name: string): Observable<Object>
  {
    return this.http.get(
      'https://pokeapi.co/api/v2/pokemon/' + name
    );
  }

}
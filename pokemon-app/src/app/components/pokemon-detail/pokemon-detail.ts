import { Component } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonService } from '../../services/pokemon';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetail {

  data: any;

  o!: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonService
  )
  {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let name = params.get('name');

    this.o = this.pokemonService.getPokemonDetail(name!);

    this.o.subscribe(this.getData);
  }

  getData = (d: Object) =>
  {
    this.data = d;
  }

}
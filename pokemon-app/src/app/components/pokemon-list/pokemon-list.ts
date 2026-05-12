import { Component } from '@angular/core';

import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

import { PokemonService } from '../../services/pokemon';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {

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
    let type = params.get('type');

    console.log(type);

    this.o = this.pokemonService.getPokemonByType(type!);

    this.o.subscribe(this.getData);
  }

  getData = (d: Object) =>
  {
    this.data = d;
  }

}
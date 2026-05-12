import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-types',
  imports: [RouterModule],
  templateUrl: './types.html',
  styleUrl: './types.css'
})
export class Types {

  pokemonTypes = [
    'normal',
    'ground',
    'flying'
  ];

}
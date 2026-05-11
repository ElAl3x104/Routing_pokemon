import { Routes } from '@angular/router';

import { Types } from './components/types/types';
import { PokemonList } from './components/pokemon-list/pokemon-list';
import { PokemonDetail } from './components/pokemon-detail/pokemon-detail';

export const routes: Routes = [

  { path: '', redirectTo: 'types', pathMatch: 'full' },

  { path: 'types', component: Types },

  { path: 'pokemon-list/:type', component: PokemonList },

  { path: 'pokemon-detail/:name', component: PokemonDetail }

];
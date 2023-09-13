import { Ipokemon, resultPokemonApi } from './ipokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  urlPost= 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Maxime'
  
  constructor(private http: HttpClient) { }

  getAllPokemons() : Observable<Ipokemon[]> {
    return this.http.get<Ipokemon[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll');
  }

  getPokemonById(id: number) : Observable<Ipokemon[]> {
    return this.http.get<Ipokemon[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=' + id);
  }

  deletePokemon(id: number) : Observable<string> {
    return this.http.get<string>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi=Maxime&id=' + id);
  }

  addPokemon(pokemon: Ipokemon): Observable<resultPokemonApi> {
    const body = JSON.stringify(pokemon);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.post<resultPokemonApi>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Maxime", body, {'headers': header})

  }
}

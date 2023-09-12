import { Ipokemon } from './ipokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  urlPost= 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll'
  
  constructor(private http: HttpClient) { }

  getAllPokemons() : Observable<Ipokemon[]> {
    return this.http.get<Ipokemon[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll');
  }
  // postPokemon() : Observable<Ipokemon[]> {
  //   return this.http.post<any>();
  // }

  addPokemon(pokemon: Ipokemon): Observable<Ipokemon> {
    return this.http.post<Ipokemon>(this.urlPost, pokemon).pipe(
      catchError(error => {
        console.error('Une erreur s\'est produite lors de l\'ajout du Pokémon :', error);
        throw error;
      })
    );
  }
}

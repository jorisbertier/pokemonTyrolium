import { Ipokemon } from './../ipokemon';
import { PokemonServiceService } from './../pokemon-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemons: Ipokemon[] = [];

  constructor(private pokemonService: PokemonServiceService) { }
  
  ngOnInit() : void {
    this.pokemonService.getAllPokemons().subscribe(pokemonTranslate => {
      this.pokemons = pokemonTranslate;
      console.log(pokemonTranslate);
    

      const newPokemon: Ipokemon = {
        id: 0,
        hp: 0,
        cp: 0,
        name: 'yoooo',
        picture: 'ccddcdc', 
        types: 'cqcsqcqd',
      };

      this.pokemonService.addPokemon(newPokemon).subscribe(pokemon => {
        this.pokemons.push(pokemon)});
    });
    console.log(this.pokemons);
    
  }

}

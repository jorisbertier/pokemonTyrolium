import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from './../pokemon-service.service';
import { Ipokemon, resultPokemonApi } from './../ipokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonList: Ipokemon[] = [];
  pokemonSelected: any;

  constructor(private pokemonService: PokemonServiceService) { }
  
  ngOnInit() : void {
    this.pokemonService.getAllPokemons().subscribe(pokemonListResult => {
      this.pokemonList = pokemonListResult;
      console.log(pokemonListResult);
    });
  
    
  }


  viewOnePokemon(id: number) {
    this.pokemonService.getPokemonById(id).subscribe(pokemonResult => {
      const yo = pokemonResult;
      console.log(yo);
    });
  }
  
  
  // resultMessageDelete: resultPokemonApi | undefined
  // deletePokemon(id:number, index:number){
  //   this.pokemonService.deletePokemon(id).subscribe(resultatDelete => {


  //     this.resultMessageDelete = resultatDelete;
  //     console.log(this.resultMessageDelete);

  //       if (this.resultMessageDelete.true !== "No have permission"){
  //         console.log(index)

  //         this.pokemonList.splice(index,1);
  //       }

  //     if (this.resultMessageDelete.true == "No have permission"){

  //       alert("Tu n'est pas autorisé a faire ça");
  //     }

  //       if (this.resultMessageDelete.err){
  //         console.log("Ya une erreur");
  //       }
  //   });
  // }


  suppressPokemon(id: number): void {
    console.log(id);
    this.pokemonService.deletePokemon(id).subscribe(deleteResult => {
      console.log(deleteResult);

    });
  }
}

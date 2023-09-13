export interface Ipokemon {

    id: number,
    hp: number,
    cp: number,
    name: string,
    picture: string,
    types: string,
    created: string,
}

export interface resultPokemonApi {
    true: string | undefined,
    err: string | undefined
    userApi: string | undefined
  }
import axios from "axios"

export function getPokemonByGeneration (id) {
  return axios.get(`https://pokeapi.co/api/v2/generation/${id}`)
  .then((results) => {
    return results.data.pokemon_species
  })
}

export function getPokemonData (name){
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((results) => {
    return results.data
  })
}


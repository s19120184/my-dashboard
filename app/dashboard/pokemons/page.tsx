import { PokemonsResponse } from '@/src/pokemons/interface/pokemons-response';
import { SimplePokemon } from '../../../src/pokemons/interface/simple-pokemons';
import React from 'react'
import { PokemonGrid } from '@/components/pokemons/PokemonGrid';

const getPokemons = async( limit = 20, offset= 0 ):Promise<SimplePokemon[]> => {
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ offset }`)
    .then( res => res.json() );

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    // throw new Error('Esto es un error que no debería de suceder');
    // throw notFound();

    return pokemons
  }

export default async function PokemonPage() {


   const pokemons = await getPokemons(151);
  
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
      
      <PokemonGrid pokemons={ pokemons } />

    </div>
  );
}

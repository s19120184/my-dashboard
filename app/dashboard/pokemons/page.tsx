import React from 'react'

const getPokemons = async (limit=20, offset=0)=>{
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                     .then(res => res.json  )

  return data
}

export default async function PokemonPage() {


  return (
      <h1>hola</h1>
  )
}

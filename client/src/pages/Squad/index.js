import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
// import { Container } from './styles';
import api from "../../utils/api"

function Squad() {

  const {counter, pokemonSquad} = useSelector(store => store)

  const [selectedPokemons, setSelectedPokemons] = useState(pokemonSquad)
  const [pokemon, setPokemon] = useState([])

  
  const renderPokemons = () => {
    const pokemons = selectedPokemons.map(pokemon => pokemon.toLowerCase())

    for (let i = 0; i < pokemons.length; i++) {
      const pokemonsName = pokemons[i].toString()
      api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonsName}`).then(response => setPokemon(response.data))
    }
  }

  useEffect(() => {
      renderPokemons()
  },[])
  return <>
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  </>;
}

export default Squad;
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
// import { Container } from './styles';
import api from "../../utils/api"
import { getId } from '../../utils/pokemonData' 


function Squad(props) {
  const {counter, pokemonSquad} = useSelector(store => store)
  const [selectedPokemons, setSelectedPokemons] = useState(pokemonSquad)
  const [pokemon, setPokemon] = useState()


  
  const renderPokemons = () => {
    const pokemons = selectedPokemons.map(pokemon => pokemon.toLowerCase())

    pokemons.forEach(element => {
      const pokemonsName = element.toString()
      api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonsName}`).then(response => setPokemon(response))
    });
  }

  useEffect(() => {

  },[])
  return <>
        {console.log(pokemon)}
  </>;
}

export default Squad;
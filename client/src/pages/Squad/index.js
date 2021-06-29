import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import api from "../../utils/api"
import Pokemon from "../../components/Pokemon";


function Squad() {
  const { pokemonName } = useSelector(store => store.pokemonSquad)
  // const [pokemon, setPokemon] = useState([])


  


  useEffect(() => {

    
    const pokemon = pokemonName.map(pokemon => pokemon)
    
    console.debug(pokemon)

    api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => response.data)

  },[])
  return <>
        {/* {console.log(pokemon)} */}

        {/* <div className="home__pokeList">
          {pokemon.map((pokemon) => (
            <Pokemon key={pokemon.name} url={pokemon.url} name={pokemon.name} />
            ))}
        </div> */}
  </>;
}

export default Squad;
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import api from '../../utils/api'
import { PokemonName,getId } from '../../utils/pokemonData';

function Intern(props) {

  const [pokemonData, setPokemonData] = useState({
    order: '',
    name: '',
    img: '',
    type:'',
  })

  
  let { id } = useParams();

  useEffect(() => {
   api.get(`/${id}`)
    .then(response => setPokemonData({
      order: response.data.id,
      name: PokemonName(response.data.name),
      img: response.data.sprites.front_default,
      type:response.data.types.map(types => types.type.name),
    }))

  },[id])

  const pokemon = pokemonData
  console.log(pokemon);
  return (
    <div className="container">

  <div className="container__order">#{pokemon.order}</div>
      <div className="container__title">{pokemon.name}</div>
      <div className="container__picture">
      <img src={pokemon.img} alt={pokemon.name}/>
      </div>
      <div className="container__types">
  <div className="types">{pokemon.type}</div>
      </div>
    </div>
  );
}

export default Intern;
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../utils/api'

function Intern() {

  const [pokemonData, setPokemonData] = useState({
    order: '',
    name: '',
    img: '',
    height: '',
    weigth: '',
    type: [],
  })

  let { id } = useParams();
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`


  useEffect(() => {

    api.get(`/${id}`)
      .then(response => setPokemonData({
        order: response.data.id,
        name: response.data.name,
        img: imageUrl,
        height: response.data.height,
        weigth: response.data.weight,
        type: response.data.types.map(types => types.type.name),
      }))

  }, [id, imageUrl])

  const pokemon = pokemonData

  return (
    <div className="container">
      <div className="container__header">
        <div className="order">#{pokemon.order}</div>
        <div className="title">{pokemon.name.toLocaleUpperCase()}</div>
      </div>
      <div className="container__picture">
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
      <div className="container__types">
        {pokemon.type.map(type => (
          <div className="type" key={type}>{type.toLocaleUpperCase()}</div>
        ))}
      </div>
    </div>
  );
}

export default Intern;
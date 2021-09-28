import React, { useState, useEffect } from 'react';
import { getId } from '../../utils/pokemonData' 
import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";
import api from '../../utils/api'
import './styles.scss';

function Pokemon(props) {
  
  const { url, name } = props
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })
  
  useEffect(() => {
    const id = getId(url)
    api.get(`/${id}`).then(response => {
      setPokemon({
        id,
        name,
        image: response.data.sprites.front_default
      })
    })

  },[name, url])

  return (
    <div className="card">
      <div className="card__title">{pokemon.name.toLocaleUpperCase()}</div>
        <img className="card__img" src={pokemon.image} alt={`${pokemon.name}`}/>
      <div className="card__number">#{pokemon.id.toString().padStart(3, '0')}</div>
      <Link 
        to={`pokemon/${pokemon.id}`}>
        <button className="card__btn"><CgPokemon size="20"/></button>
      </Link>
    </div>
    )
  }
  
  export default Pokemon;
  
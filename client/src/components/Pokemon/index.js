import React, { useState, useEffect } from 'react';
import { getId } from '../../utils/pokemonData' 
import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";
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

    setPokemon({
      id,
      name,
      image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
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
  
import React, { useState, useEffect } from 'react';
import './styles.scss';

function Pokemon(props) {
  
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })

  const { url } = props
 
  useEffect(() => {
    const id = url.substring(34, url.length - 1) 

    setPokemon({
      id,
      name: props.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    })
  },[props.name, url])
  
  
  return (
    
    <div className="card">
      <div className="card__title">{props.name}</div>
      <img className="card__img" src={pokemon.image} alt={`${pokemon.name}`}/>
  <div className="card__number">#{pokemon.id}</div>
      <button className="btn">Details</button>
    </div>
    )
  }
  
  export default Pokemon;
  
  
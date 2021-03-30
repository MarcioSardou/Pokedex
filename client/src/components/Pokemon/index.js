import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CgPokemon} from "react-icons/cg";
import { useDispatch } from 'react-redux';

import { decrement, increment } from "../../features/counter/counterSlice"
import './styles.scss';
import { getId } from '../../utils/pokemonData' 

function Pokemon(props) {
  
  const { url, name } = props
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })

  const dispatch = useDispatch()

  const handleAddTeam = (event) =>  {
    const card = event.target.parentElement
    const pokeName = card.children[0].innerHTML

    if(pokeName)
    console.log(pokeName)
  }
  
  
  useEffect(() => {
    const id = getId(url)

    setPokemon({
      id,
      name,
      image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    })

  },[name, url])

  return (
    <div className="card" id={pokemon.id}>
      <div className="card__title">{pokemon.name.toLocaleUpperCase()}</div>
        <img className="card__img" src={pokemon.image} alt={`${pokemon.name}`}/>
      <div className="card__number">#{pokemon.id.toString().padStart(3, '0')}</div>
      <Link 
        to={`pokemon/${pokemon.id}`}>
        <button className="card__btn"><CgPokemon size="20"/></button>
      </Link>
        <button 
          onClick={() => dispatch(increment())}
          className="card__btn__team">
            Add
        </button>
    </div>
    )
  }
  
  export default Pokemon;
  
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CgPokemon} from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { getId } from '../../utils/pokemonData' 
import { getFiltredPokemon,setLimitSquad } from '../../utils/pokemonSquad'
import { decrement, increment } from "../../features/counter/counterSlice"
import { addPokemon } from "../../features/pokemonSquad/pokemonSquadSlice"

function Pokemon(props) {
  
  const { url, name } = props
	const dispatch = useDispatch()
	const { counter,pokemonSquad } = useSelector(state => state)
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })

  const multipleDispatch = (clickedPokemon, cardPokemonClicked) => {

    if(counter.value > 5) {
      alert("Seu time já está cheio.")
    } else {
      cardPokemonClicked.classList.add("selected")
      dispatch(increment())
      dispatch(addPokemon(clickedPokemon))
    }
  }

  const handleAddTeam = (event) =>  {
			const cardPokemonClicked = event?.target.parentElement
      const clickedPokemon = cardPokemonClicked?.firstChild?.innerHTML

      getFiltredPokemon(pokemonSquad,clickedPokemon) 
        ? alert("Esse Pokémon já está no seu time")
        : multipleDispatch(clickedPokemon, cardPokemonClicked)
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
    <>
      <div className="card" id={pokemon.id}>
      <div className="card__title">{pokemon.name.toLocaleUpperCase()}</div>
        <img className="card__img" src={pokemon.image} alt={`${pokemon.name}`}/>
      <div className="card__number">#{pokemon.id.toString().padStart(3, '0')}</div>
      <Link 
        to={`pokemon/${pokemon.id}`}>
        <button className="card__btn"><CgPokemon size="20"/></button>
      </Link>
        <button 
          onClick={(event) => handleAddTeam(event)}
          className="card__btn__team">
            Add
        </button>
    </div>
    </>
    )
  }
  
  export default Pokemon;
  
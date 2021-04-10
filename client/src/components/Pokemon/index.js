/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { CgPokemon} from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { getId } from '../../utils/pokemonData' 
import { getFiltredPokemon } from '../../utils/pokemonSquad'
import { decrement, increment } from "../../features/counter/counterSlice"
import { addPokemon, RemovePokemon } from "../../features/pokemonSquad/pokemonSquadSlice"

function Pokemon(props) {

	const dispatch = useDispatch()
  const { url, name } = props
	const { counter, pokemonSquad } = useSelector(state => state)

  const [ hasInMyTeam, setHasInMyTeam ] = useState(false)
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })



  const AddmultipleDispatch = (clickedPokemon, cardPokemonClicked) => {

    if(counter.value > 5) {
      alert("Seu time já está cheio.")
    } else {
      cardPokemonClicked.classList.add("selected")
      hasPokemonOnTeam(clickedPokemon)
      dispatch(increment())
      dispatch(addPokemon(clickedPokemon))
    }
  }

  const handleAddTeam = (event) =>  {
    const cardPokemonClicked = event?.target.parentElement
    const clickedPokemon = cardPokemonClicked?.firstChild?.innerHTML

    getFiltredPokemon(pokemonSquad,clickedPokemon) 
      ? alert("Esse Pokémon já está no seu time")
      : AddmultipleDispatch(clickedPokemon, cardPokemonClicked)
}

  const RemoveMultipleDispatch = (filtredClickedPokemon, cardPokemonClicked) => {
    cardPokemonClicked.classList.remove("selected")
    dispatch(RemovePokemon(filtredClickedPokemon))
    dispatch(decrement())
  }

  const handleRemoveTeam = (event) => {
    const clickedPokemon = event?.target.parentElement?.firstChild?.innerHTML
    const cardPokemonClicked = event?.target.parentElement
    const filtredClickedPokemon = pokemonSquad.findIndex(item => item === clickedPokemon)
    if(filtredClickedPokemon < 0) return null

      RemoveMultipleDispatch(filtredClickedPokemon, cardPokemonClicked)
  }

  const hasPokemonOnTeam = useCallback((clickedPokemonName) => {
    const filtred = pokemonSquad.map(pokemon => pokemon === clickedPokemonName )
    setHasInMyTeam(filtred)
  },[hasInMyTeam])
  
  
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
      <div className="card" id={pokemon.id} >
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

      {hasInMyTeam ? (
        <button className="remove-btn" onClick={(event) => handleRemoveTeam(event)}>Remover</button>
      ) : ""}
    </div>
    </>
    )
  }
  
  export default Pokemon;
  
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { CgPokemon} from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

import { getId } from '../../utils/pokemonData' 
import { addPokemon, RemovePokemon } from "../../features/pokemonSquad/pokemonSquadSlice"
import './styles.scss';

function Pokemon(props) {

	const dispatch = useDispatch()
  const { url, name } = props
	const { pokemonSquad } = useSelector(state => state)
  const [ isSelectedPokemon, setIsSelectedPokemon ] = useState(false)
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })

  


  const RemoveMultipleDispatch = (filtredClickedPokemon, cardPokemonClicked) => {
    cardPokemonClicked.classList.remove("selected")
    dispatch(RemovePokemon(filtredClickedPokemon))
  }

  const handleRemoveTeam = (event) => {
    const clickedPokemon = event?.target.parentElement?.firstChild?.innerHTML
    const cardPokemonClicked = event?.target.parentElement
    const filtredClickedPokemon = pokemonSquad.findIndex(item => item === clickedPokemon)
    if(filtredClickedPokemon < 0) return null

      RemoveMultipleDispatch(filtredClickedPokemon, cardPokemonClicked)
  }

  // const hasPokemonOnTeam = useCallback((PokemonClickedName) => {
  //   console.debug(pokemonSquad)
    // const filtred = pokemonSquad.map(pokemon => pokemon === clickedPokemonName )
    // setHasInMyTeam(filtred)
  // },[])


  
  const handleAddTeam = (event) =>  {
    const pokemonClickedElement = event?.target.parentElement
    const PokemonClickedName = pokemonClickedElement.dataset.name

    if(pokemonSquad.pokemonName.includes(PokemonClickedName)) {

      alert("Esse Pokémon já está no seu time")
    } else {

      pokemonSquad.pokemonQuantity > 5 ? alert("Seu time já está cheio.") : null
      // hasPokemonOnTeam(PokemonClickedName) //TODO CONTINUAR DAQUI
      pokemonClickedElement.classList.add('selected')
      dispatch(addPokemon(PokemonClickedName))
    }
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
      <div className='card' id={pokemon.id} data-name={pokemon.name}>
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

      {/* {isSelectedPokemon ? (
        <button className="remove-btn" onClick={(event) => handleRemoveTeam(event)}>Remover</button>
      ) : ""} */}
    </div>
    </>
    )
  }
  
  export default Pokemon;
  
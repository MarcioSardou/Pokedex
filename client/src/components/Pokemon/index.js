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
	const { pokemonName, pokemonQuantity  } = useSelector(state => state.pokemonSquad)
  const [ isSelectedPokemon, setIsSelectedPokemon ] = useState(false)
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image:'',
  })

  

  const handleRemoveTeam = (event) => {

    const pokemonClickedElement = event?.target.parentElement
    const PokemonClickedName = pokemonClickedElement.dataset.name

    const selectedPokemonIndex = pokemonName.findIndex(pokemon => pokemon === PokemonClickedName )

    if(selectedPokemonIndex < 0) return null

    dispatch(RemovePokemon(selectedPokemonIndex))
    setIsSelectedPokemon(false)
    pokemonClickedElement.classList.remove('selected')
  }

  
  const handleAddTeam = (event) =>  {
    const pokemonClickedElement = event?.target.parentElement
    const PokemonClickedName = pokemonClickedElement.dataset.name

    if(pokemonName.includes(PokemonClickedName)) return alert("Esse Pokémon já está no seu time")
 
    if(pokemonQuantity > 5 ) return alert ('Máximo de 5 pokemons na equipe.') 

    dispatch(addPokemon(PokemonClickedName))
    setIsSelectedPokemon(true)
    pokemonClickedElement.classList.add('selected')
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

      {isSelectedPokemon ? (
        <button className="remove-btn" onClick={(event) => handleRemoveTeam(event)}>Remover</button>
      ) : ""}
    </div>
    </>
    )
  }
  
  export default Pokemon;
  
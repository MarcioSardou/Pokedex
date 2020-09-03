  import React, { useEffect, useState } from 'react';
  import { useParams, useHistory } from "react-router-dom";
  import { FiArrowLeft } from "react-icons/fi";
  import pokeTypes from '../../utils/pokemonTypes'
  import api from '../../utils/api';

  function Intern() {  
    
    const { id } = useParams();
    const  history  = useHistory();
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const [pokemonData, setPokemonData] = useState({
      order: '',
      name: '',
      img: '',
      height: '',
      weigth: '',
      type: [],
    })

    const backHome = () => {
      history.push('/')
    }

    useEffect(() => {

      api.get(`/${id}`)
        .then(response => setPokemonData({
          order: response.data.id,
          name: response.data.name.toLocaleUpperCase(),
          img: imageUrl,
          height: response.data.height,
          weigth: response.data.weight,
          type: response.data.types.map(types => types.type.name),
        }))

    }, [id, imageUrl])

    const pokemon = pokemonData
    const typeColors = pokeTypes
    const backgroundColorType = pokemon.type[0]
    const dinamiColor = `${typeColors[backgroundColorType]}`

    
    return (
      <div className="container">
        <FiArrowLeft onClick={backHome} className='back-btn' size="20" style={{backgroundColor:dinamiColor }}/>
        <div className="container__header" style={{backgroundColor:dinamiColor }}>
            <div className="order">#{pokemon.order.toString().padStart(3, '0')}</div>
            <div className="title">{pokemon.name}</div>
        </div>
        <div className="container__picture">
          <img src={pokemon.img} alt={pokemon.name} />
        </div>
        <div className="container__types">
          {pokemon.type.map(type => (
            <div className="type" key={type} style={{backgroundColor: `${typeColors[type]}`}}>
            {type.toLocaleUpperCase()}
            </div>
          ))}
        </div>

        <div className="container__stats" style={{backgroundColor:dinamiColor }}>
          <span>Height : {(pokemon.height/10)}m</span>
          <span>Weigth : {(pokemon.weigth/10)}kg</span>
        </div>

      </div>
    );
  }

  export default Intern;
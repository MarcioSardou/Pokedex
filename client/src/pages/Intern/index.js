import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Header from '../../components/Header';
import api from '../../utils/api';
import { FiArrowLeft } from "react-icons/fi";
import pokeTypes from '../../utils/pokemonTypes'

function Intern(props) {  
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

  let  history  = useHistory();

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
        type: response.data.types.map(types => types.type),
      }))

  }, [id, imageUrl])

  const pokemon = pokemonData
  const mainTypes = Object.keys(pokeTypes)
  const poketypes = pokemon.type.map(type => type.name)
  const type = mainTypes.find(type => poketypes.indexOf(type) > -1)
 
  const color = pokeTypes[type]


  return (
    <div className="container">
    <Header />
      <FiArrowLeft onClick={backHome} className='back-btn'/>
      <div className="container__header" style={{backgroundColor: color}}>
          <div className="order">#{pokemon.order.toString().padStart(3, '0')}</div>
          <div className="title">{pokemon.name}</div>
      </div>
      <div className="container__picture">
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
      <div className="container__types" >
        {pokemon.type.map(type => (
          <div className="type" style={{backgroundColor: color}} key={type.name}>{type.name.toLocaleUpperCase()}</div>
        ))}
      </div>

      <div className="container__stats" style={{backgroundColor: color}}>
        <span>Height : {(pokemon.height/10)}m</span>
        <span>Weigth : {(pokemon.weigth/10)}kg</span>
      </div>
        
      {/* {id ? console.log('aqui',id): console.error("ERRO")}
      usar isso acima pra exibir evoluções */}
    </div>
  );
}

export default Intern;
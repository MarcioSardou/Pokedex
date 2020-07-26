import React from 'react';
import { useState, useEffect } from 'react'
import api  from '../../utils/api'
import './styles.scss'
import bulba from '../../assets/BULBA.png'


function Pokemon() {

const [pokemon, setPokemon] = useState([])


useEffect(() => {
  api.get('/').then(response => setPokemon(response.data.results))
}, [])



  return (
    <div className="card">
      
        <p className="card__title">BULBASSAUR</p>
      <img className="card__img" src={bulba}/>
        <span className="card__number">#003</span>
      <button className="btn">Details</button>
    </div>
  )
}

export default Pokemon;
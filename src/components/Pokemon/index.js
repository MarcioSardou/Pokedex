import React from 'react';
import { useState, useEffect } from 'react'
import api  from '../../utils/api'


function Pokemon() {

const [pokemon, setPokemon] = useState([])


useEffect(() => {
  api.get('/').then(response => setPokemon(response.data.results))
}, [])



  return (
    <div className="card">
      <p className="card__title">Bulbassauro</p>
      <img className="card__img"></img>
      <span className="card__number">#003</span>
      <div className="card__type">Grass</div>

    </div>
  )
}

export default Pokemon;
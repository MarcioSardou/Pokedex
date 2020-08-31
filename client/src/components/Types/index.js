import React, { useEffect, useState} from 'react';
import pokeTypes from '../../utils/pokemonTypes'
import api from '../../utils/api'



function Types(props) {

  const [types, setTypes] = useState([])

  const { id } = props
  useEffect(() => {
    api.get(`/${id}`)
    .then(item => setTypes(item.data.types))
  }, [])

  const typeNames = types.map(type => type.type)
  const tete = typeNames.map(type => type.name)

  return (
    <>
    </>
  );
}

export default Types;
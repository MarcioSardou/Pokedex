  import React, { useState, useEffect } from 'react';
  import Pokemon from '../../components/Pokemon'
  import Search from '../../components/Search'
  import logo from '../../assets/pokedex-logo.png'
  import './styles.scss'
  import api from '../../utils/api'


  function Home() {

    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
      api.get('/')
        .then(response => setAllPokemon(response.data['results']))
    },[])
    
    return (
      <React.Fragment>
        <header className="top">
          <img src={logo} className="top__img" alt="Pokedex Logo"/>
        </header>
        <div className="search-container">
          <Search />
        </div>
        
        <div className="pokecard">
        {allPokemon.map(pokemon => (
          <Pokemon
            key={pokemon.name}
            url={pokemon.url}
            name={pokemon.name}
          />

        ))}
      
        </div>  
      </React.Fragment>
        );
      }
      
      export default Home;
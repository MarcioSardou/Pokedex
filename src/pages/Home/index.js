  import React, { useState, useEffect } from 'react';
  import Pokemon from '../../components/Pokemon'
  import Search from '../../components/Search'
  import logo from '../../assets/pokedex-logo.png'
  import './styles.scss'
  import api from '../../utils/api'


  function Home() {

    const [allPokemon, setAllPokemon] = useState([])
    const [limit, setLimit] = useState(20)
    const [search, setSearch] = useState('')

    function loadMore() {
      setLimit(limit + 20)
    }

    const handleSearch = (event) => {
      event.preventDefault();
      setSearch(event.target.value)
      }

    useEffect(() => {
      api.get(`/?limit=${limit}`)
        .then(response => setAllPokemon(response.data['results']))
    },[limit])
    
    return (
        <div className="container">
          <header className="container__top">
            <img src={logo} className="container__top__img" alt="Pokedex Logo"/>
          </header>
          <div className="search-container" onChange={(e) => handleSearch(e)}>
            <Search 
              value={search}
            />
          </div>
          
          <div className="container__pokeList">
          {allPokemon.map(pokemon => (
            <Pokemon
              key={pokemon.name}
              url={pokemon.url}
              name={pokemon.name}
            />
          ))}
          <button className="container__pokeList__btn-load"onClick={() => loadMore()}>Carregar Mais</button>
          </div>
        </div>  
        );
      }
      
      export default Home;
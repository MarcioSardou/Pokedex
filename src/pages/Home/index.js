    import React, { useState, useEffect } from 'react';
    import Pokemon from '../../components/Pokemon'
    import logo from '../../assets/pokedex-logo.png'
    import './styles.scss'
    import api from '../../utils/api'


    function Home() {

      const [allPokemon, setAllPokemon] = useState([])
      const [filterPokemon, setFilterPokemon] = useState([])
      const [limit, setLimit] = useState(20)
      const [search, setSearch] = useState('')


      const loadMore = (e) => {
        setLimit(limit + 20)
      }

      const handleFilter = (e) => {
        const searchValue = e.target.value.toLowerCase()
        
        setFilterPokemon(
          allPokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchValue)
          })
        )
      }

      useEffect(() => {
        api.get(`/?limit=${limit}`)
          .then(response => {
            setAllPokemon(response.data['results'],
            setFilterPokemon(response.data['results'])
            )})

         
      } ,[limit, search])
      
      return (
        <div className="container">
            <header className="container__top">
              <img src={logo} className="container__top__img" alt="Pokedex Logo"/>
            </header>
            <div className="search">
              <form>
                <input
                 type="text" 
                 placeholder="Ex: Pikachu"
                 onChange={(e) => handleFilter(e)}
                />
              </form>
            </div>
            
            <div className="container__pokeList">
              
            {filterPokemon.map(pokemon => (
              <Pokemon
                key={pokemon.name}
                url={pokemon.url}
                name={pokemon.name}
              />
            ))}
            <button className="container__pokeList__btn-load"onClick={(e) => loadMore(e)}>Carregar Mais</button>
            </div>
          </div>  
          );
        }
        
        export default Home;